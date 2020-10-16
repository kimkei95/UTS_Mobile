import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkuPageRoutingModule } from './aku-routing.module';

import { AkuPage } from './aku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkuPageRoutingModule
  ],
  declarations: [AkuPage]
})
export class AkuPageModule {}
