import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortausbPageRoutingModule } from './portausb-routing.module';

import { PortausbPage } from './portausb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortausbPageRoutingModule
  ],
  declarations: [PortausbPage]
})
export class PortausbPageModule {}
