import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaazulPage } from './telaazul.page';

const routes: Routes = [
  {
    path: '',
    component: TelaazulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaazulPageRoutingModule {}
