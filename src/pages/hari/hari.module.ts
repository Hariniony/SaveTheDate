import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hari } from './hari';

@NgModule({
  declarations: [
    Hari,
  ],
  imports: [
    IonicPageModule.forChild(Hari),
  ],
  exports: [
    Hari
  ]
})
export class HariModule {}
