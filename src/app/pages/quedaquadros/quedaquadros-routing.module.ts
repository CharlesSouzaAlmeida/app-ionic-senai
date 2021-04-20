import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuedaquadrosPage } from './quedaquadros.page';

const routes: Routes = [
  {
    path: '',
    component: QuedaquadrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuedaquadrosPageRoutingModule {}
