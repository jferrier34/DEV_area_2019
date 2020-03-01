import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AllReactionsComponent } from './all-reactions/all-reactions.component';
import { AllActionsComponent } from './all-actions/all-actions.component';
import { FacebookServicesComponent } from './all-reactions/facebook-services/facebook-services.component';
import { InstagramServicesComponent } from './all-reactions/instagram-services/instagram-services.component';
import { TwitterServicesComponent } from './all-reactions/twitter-services/twitter-services.component';
import { GithubServicesComponent } from './all-actions/github-services/github-services.component';
import { WeatherServicesComponent } from './all-actions/weather-services/weather-services.component';
import { GithubComponent } from './auth/github/github.component';
import { InstaComponent } from './auth/insta/insta.component';

const routes: Routes = [{ path: 'login',
component: HomeComponent
},
{ path: '',
component: HomeComponent
},
{ path: 'register',
component: RegisterComponent
},
{ path: 'all-reactions',
component: AllReactionsComponent
},
{ path: 'all-actions',
component: AllActionsComponent
},
{ path: 'facebook-services',
component: FacebookServicesComponent
},
{ path: 'instagram-services',
component: InstagramServicesComponent
},
{ path: 'twitter-services',
component: TwitterServicesComponent
},
{ path: 'github-services',
component: GithubServicesComponent
},
{ path: 'weather-services',
component: WeatherServicesComponent
},
{ path: 'authGithub',
component: GithubComponent
},
{ path: 'authYammer',
component: InstaComponent
},
{ path: 'timer-services',
component: WeatherServicesComponent
},
{ path: 'dashboard',
component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
