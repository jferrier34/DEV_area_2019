const express = require('express')
const request = require('request')
const cors = require('cors')
const server = express()
const https = require('https')
const fs = require('fs')

var admin = require("firebase-admin");
var cron = require("node-cron");
var Twit = require('twit')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://area-epitech-6886e.firebaseio.com"
});

var db = admin.database();

server.get('/', cors(), function (req, res) {
  res.send('Welcome to AREA project API.')
});

// Route use to get about.json who explain the different informations about this project
// Example: /about.json
server.get('/about.json', cors(), function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var timestamp = Math.floor(Date.now() / 1000)
  var ref = db.ref("about")

  ip = ip.split(',')[0]
  ip = ip.split(':').slice(-1)
  ref.once("value").then(function (snapshot) {
    var service = snapshot.val().service
    res.json({
      client: { host: ip[0] },
      server: {
        current_time: timestamp,
      },
      service,
    })
  });
});

// Cron checking each day (at 9AM) if is raining or
// if the temperature is under 15 degrees and execute reaction if needed
cron.schedule('0 9 * * *', function () {
  var options = {
    method: 'GET',
    url: "http://api.weatherstack.com/current?access_key=1a3a4bef2771b12c441c2bcf556aef51&query=Toulouse"
  }

  request.get(options, function (err, response, body) {
    if (err) {
      console.log("ERROR: Cannot get weather.")
      return
    }
    var current_weather_code = JSON.parse(body).current.weather_code
    var current_temp = JSON.parse(body).current.temperature
    if (current_weather_code == 302) { // 302 == Moderate rain
      execWeatherRainReaction()
    }
    if (current_temp <= 15) {
      execWeatherTempLowReaction()
    }
  })
  console.log('Check daily weather')
});

function execWeatherRainReaction() {
  var ref = db.ref("actreact")

  ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      if (childSnapshot.val().action.ServiceName == "rainy-day") {
        var reaction = childSnapshot.val().ServiceName
        execServiceReaction(reaction, childSnapshot.val().reaction)
      }
    });
  });
}

function execWeatherTempLowReaction() {
  var ref = db.ref("actreact");

  ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      if (childSnapshot.val().action.ServiceName == "temp-under-value") {
        var reaction = childSnapshot.val().reaction.ServiceName
        execServiceReaction(reaction, childSnapshot.val().reaction)
      }
    });
  });
}

// Route use to create a new Github Webhook in a specific repository
// Example: /create/GithubWebhook?owner=username&token=user_token&repo=repo_name&action_id=action_id
server.get('/create/GithubWebhook', cors(), function (req, res) {
  var user_name = req.query.owner
  var user_token = req.query.token
  var repo = req.query.repo
  var action_id = req.query.action_id

  var options = {
    method: 'POST',
    url: "https://api.github.com/repos/" + user_name + "/" + repo + "/hooks",
    auth: {
      user: user_name,
      password: user_token
    },
    headers: {
      'User-Agent': 'Area'
    },
    json: {
      'name': 'web',
      'active': true,
      'events': ['push'],
      'config': {
        'url': 'https://devhugo.com:8080/webhook/GithubCommit?owner=' + user_name + '&repo=' + repo + '&action_id=' + action_id,
        'content_type': 'json',
        'insecure_ssl': '1'
      }
    }
  }

  request.post(options, function (err, res, body) {
    if (err) {
      console.log("ERROR: Webhook not created.")
      return
    }
  })
  res.json('Webhook created.')
});

// Route use to get the GitHub WebHook reaction
// Example: /webhook/GithubCommit?owner=username&repo=repo_name&action_id=action_id
server.post('/webhook/GithubCommit', cors(), function (req, res) {
  var user_name = req.query.owner
  var repo = req.query.repo
  var action_id = req.query.action_id

  if (req.get("X-GitHub-Event") == "push") {
    execGithubCommitReaction(user_name, repo, action_id)
  }
  res.json('Github Webhook called')
});

function execGithubCommitReaction(user_name, repo, action_id) {
  var ref = db.ref("actreact");

  ref.once("value").then(function (snapshot) {
    if (snapshot.hasChild(action_id)) {
      ref = db.ref("actreact/" + action_id + "/reaction");
      ref.once('value').then(function (snapshot) {
        var reaction = snapshot.val().ServiceName
        execServiceReaction(reaction, snapshot.val())
      });
    } else {
      console.log("This action ID doesn't exist: " + action_id)
    }
  });
}

// Route use to get the list (array) of Github repository name owned by a specific user
// Example: /get/GithubRepos?owner=username&token=user_token
server.get('/get/GithubRepos', cors(), function (req, res) {
  var user_name = req.query.owner
  var user_token = req.query.token

  var options = {
    method: 'GET',
    url: "https://api.github.com/user/repos?affiliation=owner",
    auth: {
      user: user_name,
      password: user_token
    },
    headers: {
      'User-Agent': 'Area'
    }
  }

  request.get(options, function (err, response, body) {
    var repos = []

    if (err) {
      console.log("ERROR: Cannot get repos.")
      return
    }
    var body_parse = JSON.parse(body);
    Array.from(body_parse).forEach(element => repos.push(element.name))
    return res.json(repos)
  })
});

// Route use to get info about the Github user authenticated
// Example: /get/GithubUser?token=user_token
server.get('/get/GithubUser', cors(), function (req, res) {
  var user_token = req.query.token

  var options = {
    method: 'GET',
    url: "https://api.github.com/user",
    headers: {
      'User-Agent': 'Area',
      'Authorization': 'token ' + user_token
    }
  }

  request.get(options, function (err, response, body) {
    if (err) {
      console.log("ERROR: Cannot get user info.")
      return
    }
    var body_parse = JSON.parse(body);
    return res.json(body_parse)
  })
});

// Route use by oauth to get back the user Github token.
// Example: /authGithub?code=oauth_code
server.get('/authGithub', cors(), function (req, res) {
  const requestToken = req.query.code
  const clientID = '6159dad038be4a86b49e'
  const clientSecret = '269fe5eab9040afad1b6ab6e96bbf29fb0303883'

  var options = {
    method: 'POST',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  }

  request.post(options, function (err, response, body) {
    if (err) {
      console.log("ERROR")
      return
    }
    return res.send(response.body)
  })
})

// Route use to get the list (array) of Yammer group name and id for a specific user.
// Example: /get/YammerGroups?token=user_token&user_id=user_id
server.get('/get/YammerGroups', cors(), function (req, res) {
  var user_id = req.query.user_id
  var user_token = req.query.token

  var options = {
    method: 'GET',
    url: "https://www.yammer.com/api/v1/groups/for_user/" + user_id + ".json",
    headers: {
      'User-Agent': 'Area',
      'Authorization': 'Bearer ' + user_token
    }
  }

  request.get(options, function (err, response, body) {
    var groups = []

    if (err) {
      console.log("ERROR: Cannot get Yammer groups.")
      return
    }
    var body_parse = JSON.parse(body);
    Array.from(body_parse).forEach(element => groups.push(element.id + ':' + element.full_name))
    return res.send(groups)
  })
});

// Route use to post a new Yammer status on All company canal.
// Example: /post/YammerStatus?token=user_token&network_id=network_id&status=message_to_post
server.get('/post/YammerStatus', cors(), function (req, res) {
  var user_token = req.query.token
  var network_id = req.query.network_id
  var status = req.query.status

  var options = {
    method: 'POST',
    url: "https://www.yammer.com/api/v1/messages.json",
    headers: {
      'User-Agent': 'Area',
      'Authorization': 'Bearer ' + user_token
    },
    json: {
      'body': status,
      'network_id': network_id
    }
  }

  request.post(options, function (err, res, body) {
    if (err) {
      console.log(err)
      return
    }
  })
  res.json('Yammer status posted.')
});

// Route use to post a new Yammer status on a specific group canal.
// Example: /post/YammerGroupStatus?token=user_token&group_id=group_id&status=message_to_post
server.get('/post/YammerGroupStatus', cors(), function (req, res) {
  var user_token = req.query.token
  var group_id = req.query.group_id
  var status = req.query.status

  var options = {
    method: 'POST',
    url: "https://www.yammer.com/api/v1/messages.json",
    headers: {
      'User-Agent': 'Area',
      'Authorization': 'Bearer ' + user_token
    },
    json: {
      'body': status,
      'group_id': group_id
    }
  }

  request.post(options, function (err, res, body) {
    if (err) {
      console.log(err)
      return
    }
  })
  res.json('Yammer status posted to group ' + group_id + '.')
});

// Route use by oauth to get back the user Yammer token
server.get('/authYammer', cors(), function (req, res) {
  const requestToken = req.query.code
  const clientID = '3a1Va7IwnmaHxQCO2JNWKw'
  const clientSecret = '1CQzsrC5VphyWIJTftHsZF9UxCEikYx4dqaHpsdnU'

  var options = {
    method: 'POST',
    url: `https://www.yammer.com/oauth2/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}&grant_type=authorization_code'`,
    headers: {
      accept: 'application/json'
    }
  }

  request.post(options, function (err, response, body) {
    if (err) {
      console.log("ERROR")
      return
    }
    return res.send(response.body)
  })
})


// Route use to get currencies actual change value.
// Example: /get/CurrenciesActual?cur1=USD&cur2=EUR
server.get('/get/CurrenciesActual', cors(), function (req, res) {
  var currency_1 = req.query.cur1;
  var currency_2 = req.query.cur2;
  var currencies = currency_1 + '_' + currency_2;
  var options = {
    method: 'GET',
    url: `https://free.currconv.com/api/v7/convert?q=${currencies}&compact=ultra&apiKey=0716cce44826ae725f08`,
    headers: {
      'User-Agent': 'Area'
    }
  }

  request.get(options, function (err, response, body) {
    if (err) {
      console.log("ERROR: Cannot get currencies.")
      return
    }
    var body_parse = JSON.parse(body);
    return res.json(body_parse);
  })
});

// Route use to get currencies available.
// Example: /get/Currencies
server.get('/get/Currencies', cors(), function (req, res) {
  var options = {
    method: 'GET',
    url: "https://free.currconv.com/api/v7/currencies?apiKey=0716cce44826ae725f08",
    headers: {
      'User-Agent': 'Area'
    }
  }

  request.get(options, function (err, response, body) {
    if (err) {
      console.log("ERROR: Cannot get currencies.")
      return
    }
    var body_parse = JSON.parse(body);
    return res.json(body_parse);
  })
});

// Route use to post a new Tweet.
// Example: /post/TwitterPostStatus?token=user_token&secret=user_secret&status=message_to_post
server.get('/post/TwitterPostStatus', cors(), function (req, res) {
  var user_token = req.query.token
  var user_secret = req.query.secret
  var message_to_post = req.query.status
  var timestamp = Math.floor(Date.now() / 1000)
  var T = new Twit({
    consumer_key:         '6s4tDjdYZxZJDjolTFgUTb5ZL',
    consumer_secret:      '0vxjtK01jPmMh3UxfHdJ3PUwuqdTb1NFbDTZFi29E4toYTpzlL',
    access_token:         user_token,
    access_token_secret:  user_secret,
  })

  T.post('statuses/update', { status: message_to_post + ' [' + timestamp + ']'})
  res.json("Tweet posted.");
});

function execServiceReaction(reaction, info) {
  switch (reaction) {
    case 'yammer-post-status':
      request.get('https://devhugo.com:8080/post/YammerStatus?token=' + info.token + '&network_id=' + info.param[0].value + '&status=' + info.param[1].value)
      break;
    case 'yammer-post-group-status':
      request.get('https://devhugo.com:8080/post/YammerGroupStatus?token=' + info.token + '&group_id=' + info.param[0].value + '&status=' + info.param[1].value)
      break;
    case 'send-mail':
      var options = {
        method: 'POST',
        url: `http://nightsls.com/sendMail.php`,
        body: `expediteur=${info.param[0].value}&destinataire=${info.param[1].value}&objet=${info.param[2].value}&message=${info.param[3].value}`,
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
      }
      request.post(options)
      break;
    case 'twitter-post-status':
      request.get(`https://devhugo.com:8080/post/TwitterPostStatus?token=${info.token.token}&secret=${info.token.secret}&status=${info.param[0].value}`)
      console.log("Tweet posted")
      break;
    case 'twitter-post-picture':
      console.log("Post Tweeter picture : TODO!")
      break;
    default:
      console.log("Not implement yet.")
      break;
  }
}

// https.createServer({
//   key: fs.readFileSync('/ssl/privkey.pem'),
//   cert: fs.readFileSync('/ssl/fullchain.pem')
// }, server).listen(3000, function () {
//   console.log('Area server listening on port 3000!')
// });

// HTTP VERSION FOR DEV
server.listen(3000, function () {
  console.log('Area server listening on port 3000!')
});
