import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HomePageModule } from './home/home.module';
import { StarterPageModule } from './starter/starter.module';
import { RegisterPageModule } from './register/register.module';
import { AllServicesActionPageModule } from './all-services-action/all-services-action.module';
import { AllServicesReactionPageModule } from './all-services-reaction/all-services-reaction.module';
import { TwitterReactionsPageModule } from './twitter-reactions/twitter-reactions.module';
import { GithubReactionsPageModule } from './github-reactions/github-reactions.module';
import { WeatherReactionsPageModule } from './weather-reactions/weather-reactions.module';
import { PublishPostTwitterPageModule } from './twitter-reactions/publish-post-twitter/publish-post-twitter.module';
import { DoCommitGithubPageRoutingModule } from './github-reactions/do-commit-github/do-commit-github-routing.module';
import { WeatherCityPageModule } from './weather-reactions/weather-city/weather-city.module';
import { WeatherCity2PageModule } from './weather-reactions/weather-city2/weather-city2.module';
import { CurrencieReactionsPageModule } from './currencie-reactions/currencie-reactions.module';
import { MailReactionsPageModule } from './mail-reactions/mail-reactions.module';
import { FluctuationDollarPageModule } from './currencie-reactions/fluctuation-dollar/fluctuation-dollar.module';
import { SendEmailPageModule } from './mail-reactions/send-email/send-email.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { GithubManager } from './github-reactions/githubManager';
import { TwitterManager } from './twitter-reactions/twitterManager'
import { GithubReactionsPage } from './github-reactions/github-reactions.page';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { StateService } from './starter/state.service';
import { FluctuationDollar2PageModule } from './currencie-reactions/fluctuation-dollar2/fluctuation-dollar2.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: HomePageModule },
      { path: 'starter', component: StarterPageModule },
      { path: 'register', component: RegisterPageModule },
      { path: 'all-services-action', component: AllServicesActionPageModule },
      { path: 'all-services-reaction', component: AllServicesReactionPageModule },
      { path: 'twitter-reactions', component: TwitterReactionsPageModule },
      { path: 'github-reactions', component: GithubReactionsPageModule },
      { path: 'weather-reactions', component: WeatherReactionsPageModule },
      { path: 'publish-post-twitter', component: PublishPostTwitterPageModule },
      { path: 'do-commit-github', component: DoCommitGithubPageRoutingModule },
      { path: 'weather-city', component: WeatherCityPageModule },
      { path: 'weather-city2', component: WeatherCity2PageModule },
      { path: 'currencie-reactions', component: CurrencieReactionsPageModule },
      { path: 'mail-reactions', component: MailReactionsPageModule },
      { path: 'fluctuation-dollar', component: FluctuationDollarPageModule },
      { path: 'fluctuation-dollar2', component: FluctuationDollar2PageModule },
      { path: 'send-email', component: SendEmailPageModule },
    ])
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    HttpClientModule,
    DataService,
    GithubManager,
    TwitterManager,
    GithubReactionsPage,
    AngularFireModule,
    FluctuationDollarPageModule,
    StateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, useValue: environment.firebase },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
