import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursSinglePageRoutingModule } from './cours-single-routing.module';

import { CoursSinglePage } from './cours-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursSinglePageRoutingModule
  ],
  declarations: [CoursSinglePage]
})
export class CoursSinglePageModule {}
