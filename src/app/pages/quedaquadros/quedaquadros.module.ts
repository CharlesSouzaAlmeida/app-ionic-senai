import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuedaquadrosPageRoutingModule } from './quedaquadros-routing.module';

import { QuedaquadrosPage } from './quedaquadros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuedaquadrosPageRoutingModule
  ],
  declarations: [QuedaquadrosPage]
})
export class QuedaquadrosPageModule {}
