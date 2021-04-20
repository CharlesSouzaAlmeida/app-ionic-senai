import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketNovoPage } from './ticket-novo.page';

const routes: Routes = [
  {
    path: '',
    component: TicketNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketNovoPageRoutingModule {}
