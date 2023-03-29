import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanquiRoutingModule } from './canqui-routing.module';
import { CanquiComponent } from './canqui.component';


@NgModule({
  declarations: [
    CanquiComponent
  ],
  imports: [
    CommonModule,
    CanquiRoutingModule
  ]
})
export class CanquiModule { }
