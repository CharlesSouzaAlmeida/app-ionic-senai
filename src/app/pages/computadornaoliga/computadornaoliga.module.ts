import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComputadornaoligaPageRoutingModule } from './computadornaoliga-routing.module';

import { ComputadornaoligaPage } from './computadornaoliga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComputadornaoligaPageRoutingModule
  ],
  declarations: [ComputadornaoligaPage]
})
export class ComputadornaoligaPageModule {}
