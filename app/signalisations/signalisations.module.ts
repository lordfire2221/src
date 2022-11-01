import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignalisationsPageRoutingModule } from './signalisations-routing.module';

import { SignalisationsPage } from './signalisations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignalisationsPageRoutingModule
  ],
  declarations: [SignalisationsPage]
})
export class SignalisationsPageModule {}
