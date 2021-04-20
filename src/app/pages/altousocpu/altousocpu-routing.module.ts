import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltousocpuPage } from './altousocpu.page';

const routes: Routes = [
  {
    path: '',
    component: AltousocpuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltousocpuPageRoutingModule {}
