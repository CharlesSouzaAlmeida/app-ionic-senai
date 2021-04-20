import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaoconectaPageRoutingModule } from './naoconecta-routing.module';

import { NaoconectaPage } from './naoconecta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaoconectaPageRoutingModule
  ],
  declarations: [NaoconectaPage]
})
export class NaoconectaPageModule {}
