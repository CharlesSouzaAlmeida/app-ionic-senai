import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramanaoinstalaPage } from './programanaoinstala.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramanaoinstalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramanaoinstalaPageRoutingModule {}
