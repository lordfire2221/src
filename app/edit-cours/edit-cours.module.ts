import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCoursPageRoutingModule } from './edit-cours-routing.module';

import { EditCoursPage } from './edit-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCoursPageRoutingModule
  ],
  declarations: [EditCoursPage]
})
export class EditCoursPageModule {}
