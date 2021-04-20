import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComputadorlentoPage } from './computadorlento.page';

const routes: Routes = [
  {
    path: '',
    component: ComputadorlentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputadorlentoPageRoutingModule {}
