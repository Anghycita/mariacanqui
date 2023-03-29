import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanquiComponent } from './canqui.component';

const routes: Routes = [{ path: '', component: CanquiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanquiRoutingModule { }
