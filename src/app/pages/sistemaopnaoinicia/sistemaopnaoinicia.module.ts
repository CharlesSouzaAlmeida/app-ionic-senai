import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SistemaopnaoiniciaPageRoutingModule } from './sistemaopnaoinicia-routing.module';

import { SistemaopnaoiniciaPage } from './sistemaopnaoinicia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemaopnaoiniciaPageRoutingModule
  ],
  declarations: [SistemaopnaoiniciaPage]
})
export class SistemaopnaoiniciaPageModule {}
