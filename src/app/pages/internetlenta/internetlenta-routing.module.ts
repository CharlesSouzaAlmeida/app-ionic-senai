import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternetlentaPage } from './internetlenta.page';

const routes: Routes = [
  {
    path: '',
    component: InternetlentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetlentaPageRoutingModule {}
