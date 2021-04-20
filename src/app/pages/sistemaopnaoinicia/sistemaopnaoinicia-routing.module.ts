import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaopnaoiniciaPage } from './sistemaopnaoinicia.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaopnaoiniciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaopnaoiniciaPageRoutingModule {}
