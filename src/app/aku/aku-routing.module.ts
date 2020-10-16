import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkuPage } from './aku.page';

const routes: Routes = [
  {
    path: '',
    component: AkuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkuPageRoutingModule {}
