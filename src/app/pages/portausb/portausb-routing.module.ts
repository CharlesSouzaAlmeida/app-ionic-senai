import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortausbPage } from './portausb.page';

const routes: Routes = [
  {
    path: '',
    component: PortausbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortausbPageRoutingModule {}
