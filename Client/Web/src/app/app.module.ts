import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { AppPreviewComponent } from './AppComponent/app-preview/app-preview.component';
import { MenuComponent } from './AppComponent/menu/menu.component';
import { ImagePickComponent } from './AppComponent/image-pick/image-pick.component';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { AllReactionsComponent } from './all-reactions/all-reactions.component';
import { AllActionsComponent } from './all-actions/all-actions.component';
import { FacebookServicesComponent } from './all-reactions/facebook-services/facebook-services.component';
import { InstagramServicesComponent } from './all-reactions/instagram-services/instagram-services.component';
import { TwitterServicesComponent } from './all-reactions/twitter-services/twitter-services.component';
import { GithubServicesComponent } from './all-actions/github-services/github-services.component';
import { WeatherServicesComponent } from './all-actions/weather-services/weather-services.component';
import { TimerServicesComponent } from './all-actions/timer-services/timer-services.component';
import { GithubComponent } from './auth/github/github.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { InstaComponent } from './auth/insta/insta.component';
import { ActReactViewComponent } from './AppComponent/act-react-view/act-react-view.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('665200484219145')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    AppPreviewComponent,
    MenuComponent,
    ImagePickComponent,
    AllReactionsComponent,
    AllActionsComponent,
    FacebookServicesComponent,
    InstagramServicesComponent,
    TwitterServicesComponent,
    GithubServicesComponent,
    WeatherServicesComponent,
    TimerServicesComponent,
    GithubComponent,
    InstaComponent,
    ActReactViewComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [HttpClient, ApiService,   {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
