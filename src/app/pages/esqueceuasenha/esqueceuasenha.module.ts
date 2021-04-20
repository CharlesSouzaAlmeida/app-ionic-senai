import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueceuasenhaPageRoutingModule } from './esqueceuasenha-routing.module';

import { EsqueceuasenhaPage } from './esqueceuasenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueceuasenhaPageRoutingModule
  ],
  declarations: [EsqueceuasenhaPage]
})
export class EsqueceuasenhaPageModule {}
