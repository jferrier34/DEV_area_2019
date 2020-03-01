# AREA - API

Routes available :
- [/about.json](#get-/about.json)
- [/get/GithubRepos](#get-/get/GithubRepos)
- [/get/GithubUser](#get-/get/GithubUser)
- [/create/GithubWebhook](#get-/create/GithubWebhook)
- [/webhook/GithubCommit](#post-/webhook/GithubCommit)
- [/authGithub](#get-/authGithub)
- [/get/YammerGroups](#get-/get/YammerGroups)
- [/post/YammerStatus](#get-/post/YammerStatus)
- [/post/YammerGroupStatus](#get-/post/YammerGroupStatus)
- [/get/Currencies](#get-/get/Currencies)
- [/post/TwitterPostStatus](#get-/post/TwitterPostStatus)

## GET /about.json
Route use to get about.json who explain the different informations and content in this project.

**Example:**

    GET /about.json

## GET /get/GithubRepos
Route use to get the list (array) of Github repository name owned by a specific user.

**Example:**

    GET /get/GithubRepos?owner=username&token=user_token
**Params :**
- owner : Github username
- token : Github user token provide by Oauth

## GET /get/GithubUser
Route use to get info about the Github user authenticated.

**Example:**

    GET /get/GithubUser?token=user_token
**Params :**
- token : Github user token provide by Oauth

## GET /create/GithubWebhook
Route use to create a new Github Webhook in a specific repository.

**Example:**

    GET /create/GithubWebhook?owner=username&token=user_token&repo=repo_name&action_id=action_id
**Params :**
- owner : Github username
- token : Github user token provide by Oauth
- repo : Github repository name
- action_id : The unique id of this action/reaction

## POST /webhook/GithubCommit
Route use **by the GitHub WebHook** to trigger a reaction.

**Example:**

    POST /webhook/GithubCommit?owner=username&repo=repo_name&action_id=action_id
**Params :**
- owner : Github username
- repo : Github repository name
- action_id : The unique id of this action/reaction

## GET /authGithub
Route use by **Oauth** to get back the user GitHub token.

**Example:**

    GET /authGithub?code=oauth_code
**Params :**
- code : Code provide by GitHub Oauth

## GET /get/YammerGroups
Route use to get the list (array) of Yammer group name and id for a specific user.

**Example:**

    GET /get/YammerGroups?token=user_token&user_id=user_id
**Params :**
- token : Yammer user token provide by Oauth
- user_id : Yammer user id

## GET /post/YammerStatus
Route use to post a new Yammer status on All company canal.

**Example:**

    GET /post/YammerStatus?token=user_token&network_id=network_id&status=message_to_post
**Params :**
- token : Yammer Oauth user token
- network_id : User network id
- status : Message to post

## GET /post/YammerGroupStatus
Route use to post a new Yammer status on a specific group canal.

**Example:**

    GET /post/YammerGroupStatus?token=user_token&group_id=group_id&status=message_to_post
**Params :**
- token : Yammer Oauth user token
- group_id : Group id where post the status
- status : Message to post

## GET /get/Currencies
Route use to get currencies available.

**Example:**

    GET /get/Currencies

## GET /get/CurrenciesActual
Route use to get currencies actual change value.

**Example:**

    GET /get/CurrenciesActual?cur1=USD&cur2=EUR
**Params :**
- cur1 : First to compare return by get/Currencies
- cur2 : Second to compare return by get/Currencies

## GET /post/TwitterPostStatus
Route use to post a new Tweet.

**Example:**

    GET /post/TwitterPostStatus?token=user_token&secret=user_secret&status=message_to_post
**Params :**
- token : Twitter user token
- secret : Twitter user secret token
- status : Message to post
