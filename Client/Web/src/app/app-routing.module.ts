import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { GithubComponent } from './auth/github/github.component';
import { InstaComponent } from './auth/insta/insta.component';
import { DlappComponent } from './core/dlapp/dlapp.component';

const routes: Routes = [{ path: 'login',
component: HomeComponent
},
{ path: '',
component: HomeComponent
},
{ path: 'login',
component: HomeComponent
},
{ path: 'register',
component: RegisterComponent
},
{ path: 'client.apk',
component: DlappComponent
},
{ path: 'authGithub',
component: GithubComponent
},
{ path: 'authYammer',
component: InstaComponent
},
{ path: 'dashboard',
component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
