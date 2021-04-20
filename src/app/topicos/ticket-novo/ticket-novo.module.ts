import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketNovoPageRoutingModule } from './ticket-novo-routing.module';

import { TicketNovoPage } from './ticket-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketNovoPageRoutingModule
  ],
  declarations: [TicketNovoPage]
})
export class TicketNovoPageModule {}
