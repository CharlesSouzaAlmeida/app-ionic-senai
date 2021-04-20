import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigdatahoraPage } from './configdatahora.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigdatahoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigdatahoraPageRoutingModule {}
