import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComputadorlentoPageRoutingModule } from './computadorlento-routing.module';

import { ComputadorlentoPage } from './computadorlento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComputadorlentoPageRoutingModule
  ],
  declarations: [ComputadorlentoPage]
})
export class ComputadorlentoPageModule {}
