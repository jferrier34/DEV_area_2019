import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'starter',
    loadChildren: () => import('./starter/starter.module').then( m => m.StarterPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'all-services-action',
    loadChildren: () => import('./all-services-action/all-services-action.module').then( m => m.AllServicesActionPageModule)
  },
  {
    path: 'twitter-reactions',
    loadChildren: () => import('./twitter-reactions/twitter-reactions.module').then( m => m.TwitterReactionsPageModule)
  },
  {
    path: 'mail-reactions',
    loadChildren: () => import('./mail-reactions/mail-reactions.module').then( m => m.MailReactionsPageModule)
  },
  {
    path: 'github-reactions',
    loadChildren: () => import('./github-reactions/github-reactions.module').then( m => m.GithubReactionsPageModule)
  },
  {
    path: 'do-commit-github',
    loadChildren: () => import('./github-reactions/do-commit-github/do-commit-github.module').then( m => m.DoCommitGithubPageModule)
  },
  {
    path: 'fluctuation-dollar',
    loadChildren: () => import('./currencie-reactions/fluctuation-dollar/fluctuation-dollar.module').then( m => m.FluctuationDollarPageModule)
  },
  {
    path: 'send-email',
    loadChildren: () => import('./mail-reactions/send-email/send-email.module').then( m => m.SendEmailPageModule)
  },
  {
    path: 'weather-reactions',
    loadChildren: () => import('./weather-reactions/weather-reactions.module').then( m => m.WeatherReactionsPageModule)
  },
  {
    path: 'currencie-reaction',
    loadChildren: () => import('./currencie-reactions/currencie-reactions-routing.module').then( m => m.CurrencieReactionsPageRoutingModule)
  },
  {
    path: 'publish-post-twitter',
    loadChildren: () => import('./twitter-reactions/publish-post-twitter/publish-post-twitter.module').then( m => m.PublishPostTwitterPageModule)
  },
  {
    path: 'publish-picture-twitter',
    loadChildren: () => import('./twitter-reactions/publish-picture-twitter/publish-picture-twitter.module').then( m => m.PublishPictureTwitterPageModule)
  },
  {
    path: 'all-services-reaction',
    loadChildren: () => import('./all-services-reaction/all-services-reaction.module').then( m => m.AllServicesReactionPageModule)
  },
  {
    path: 'do-commit-github',
    loadChildren: () => import('./github-reactions/do-commit-github/do-commit-github-routing.module').then( m => m.DoCommitGithubPageRoutingModule)
  },
  {
    path: 'weather-city',
    loadChildren: () => import('./weather-reactions/weather-city/weather-city.module').then( m => m.WeatherCityPageModule)
  },
  {
    path: 'currencie-reactions',
    loadChildren: () => import('./currencie-reactions/currencie-reactions.module').then( m => m.CurrencieReactionsPageModule)
  },
  {
    path: 'mail-reactions',
    loadChildren: () => import('./mail-reactions/mail-reactions.module').then( m => m.MailReactionsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
