import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrPage } from './contr.page';

const routes: Routes = [
  {
    path: '',
    component: ContrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContrPageRoutingModule {}
