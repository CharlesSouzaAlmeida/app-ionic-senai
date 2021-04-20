import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComputadornaoligaPage } from './computadornaoliga.page';

const routes: Routes = [
  {
    path: '',
    component: ComputadornaoligaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputadornaoligaPageRoutingModule {}
