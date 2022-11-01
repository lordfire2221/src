import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursSinglePage } from './cours-single.page';

const routes: Routes = [
  {
    path: '',
    component: CoursSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursSinglePageRoutingModule {}
