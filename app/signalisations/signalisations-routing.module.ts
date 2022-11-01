import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignalisationsPage } from './signalisations.page';

const routes: Routes = [
  {
    path: '',
    component: SignalisationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalisationsPageRoutingModule {}
