import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome', pathMatch: 'full' 
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'exercices',
    loadChildren: () => import('./exercices/exercices.module').then( m => m.ExercicesPageModule)
  },
  {
    path: 'statistiques',
    loadChildren: () => import('./statistiques/statistiques.module').then( m => m.StatistiquesPageModule)
  },
  {
    path: 'signalisations',
    loadChildren: () => import('./signalisations/signalisations.module').then( m => m.SignalisationsPageModule)
  },
  {
    path: 'cours',
    loadChildren: () => import('./cours/cours.module').then( m => m.CoursPageModule)
  },
  {
    path: 'exercice',
    loadChildren: () => import('./exercice/exercice.module').then( m => m.ExercicePageModule)
  },
  {
    path: 'coursSingle',
    loadChildren: () => import('./cours-single/cours-single.module').then( m => m.CoursSinglePageModule)
  },
  {
    path: 'edit-cours',
    loadChildren: () => import('./edit-cours/edit-cours.module').then( m => m.EditCoursPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
