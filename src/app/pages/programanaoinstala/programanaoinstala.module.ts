import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramanaoinstalaPageRoutingModule } from './programanaoinstala-routing.module';

import { ProgramanaoinstalaPage } from './programanaoinstala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramanaoinstalaPageRoutingModule
  ],
  declarations: [ProgramanaoinstalaPage]
})
export class ProgramanaoinstalaPageModule {}
