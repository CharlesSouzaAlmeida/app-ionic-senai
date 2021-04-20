import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltousocpuPageRoutingModule } from './altousocpu-routing.module';

import { AltousocpuPage } from './altousocpu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltousocpuPageRoutingModule
  ],
  declarations: [AltousocpuPage]
})
export class AltousocpuPageModule {}
