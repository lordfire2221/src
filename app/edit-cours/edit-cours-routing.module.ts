import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCoursPage } from './edit-cours.page';

const routes: Routes = [
  {
    path: '',
    component: EditCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCoursPageRoutingModule {}
