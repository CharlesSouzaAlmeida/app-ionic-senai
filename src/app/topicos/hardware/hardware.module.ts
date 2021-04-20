import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HardwarePageRoutingModule } from './hardware-routing.module';

import { HardwarePage } from './hardware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HardwarePageRoutingModule
  ],
  declarations: [HardwarePage]
})
export class HardwarePageModule {}
