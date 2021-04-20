import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigdatahoraPageRoutingModule } from './configdatahora-routing.module';

import { ConfigdatahoraPage } from './configdatahora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigdatahoraPageRoutingModule
  ],
  declarations: [ConfigdatahoraPage]
})
export class ConfigdatahoraPageModule {}
