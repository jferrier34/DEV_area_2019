
// Core components
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        console.log("cookie:" + c.substring(name.length, c.length));
        return c.substring(name.length, c.length);
      }
    }
    return 'nocookie';
  }

  private baseUrl = 'http://localhost:9080/';
  constructor(public http: HttpClient) { }

  public login(login: string, pass) {
    const body = new HttpParams()
      .set('username', login)
      .set('password', pass);

    return this.http.post(`${this.baseUrl}user/login`,
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  public GithubHook(user, tocken: string, repo, idact) {
    console.log(`https://devhugo.com:8080/create/GithubWebhook?owner=${user}&token=${tocken}&repo=${repo}&action_id=${idact}`)
    return this.http.get(`https://devhugo.com:8080/create/GithubWebhook?owner=${user}&token=${tocken}&repo=${repo}&action_id=${idact}`);
  }

  public GithubToken(code: string) {
    return this.http.get('https://devhugo.com:8080/authGithub?code=' + code);
  }

  public getCurrency() {
    return this.http.get('https://devhugo.com:8080/get/Currencies');
  }

  public getCurrencyActual(cur1, cur2) {
    return this.http.get(`https://devhugo.com:8080/get/CurrenciesActual?cur1=${cur1}&cur2=${cur2}`);
  }

  public GithubUser(code: string) {
    return this.http.get('https://devhugo.com:8080/get/githubUser?token=' + code);
  }

  public YammerTocken(code: string) {
    return this.http.get('https://devhugo.com:8080/authYammer?code=' + code);
  }

  public GithubRepos(username, token) {
    return this.http.get('https://devhugo.com:8080/get/GithubRepos?owner='+ username +'&token='+ token);
  }

  public YammerGroup(username, token) {
    return this.http.get('https://devhugo.com:8080/get/YammerGroups?token='+token+'&user_id='+ username);
  }
  public validTocken() {
    const body = new HttpParams()
      .set('tocken', this.getCookie('tocken'));

    return this.http.post(`${this.baseUrl}user/validT`,
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  public register(name: string, pass: string, email: string) {
    const body = new HttpParams()
      .set('name', name)
      .set('email', email)
      .set('pass', pass);

    return this.http.post(`${this.baseUrl}user/register`,
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  SERVER_URL: string = "http://127.0.0.1:8000";
  public uploadFile(data) {
    let uploadURL = `http://nightsls.com/api/v2/upload.php`;

    return this.http.post<any>(uploadURL, data);
  }

  public registerImage(name: string, link: string, banque: number, w: string, h: string) {
    const body = new HttpParams()
      .set('tocken', this.getCookie('tocken'))
      .set('name', name)
      .set('link', link)
      .set('width', w)
      .set('height', h)
      .set('banque', banque.toString());

    return this.http.post(`${this.baseUrl}img/addImg`,
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }


}