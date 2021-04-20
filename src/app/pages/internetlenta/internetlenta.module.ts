import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternetlentaPageRoutingModule } from './internetlenta-routing.module';

import { InternetlentaPage } from './internetlenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternetlentaPageRoutingModule
  ],
  declarations: [InternetlentaPage]
})
export class InternetlentaPageModule {}
