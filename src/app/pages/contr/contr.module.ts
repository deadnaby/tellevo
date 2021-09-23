import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrPageRoutingModule } from './contr-routing.module';

import { ContrPage } from './contr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrPageRoutingModule
  ],
  declarations: [ContrPage]
})
export class ContrPageModule {}
