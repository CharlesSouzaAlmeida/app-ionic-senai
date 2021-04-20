import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaazulPageRoutingModule } from './telaazul-routing.module';

import { TelaazulPage } from './telaazul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaazulPageRoutingModule
  ],
  declarations: [TelaazulPage]
})
export class TelaazulPageModule {}
