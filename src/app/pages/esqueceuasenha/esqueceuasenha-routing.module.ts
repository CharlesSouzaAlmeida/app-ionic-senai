import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueceuasenhaPage } from './esqueceuasenha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueceuasenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueceuasenhaPageRoutingModule {}
