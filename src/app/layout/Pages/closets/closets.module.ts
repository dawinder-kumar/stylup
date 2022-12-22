import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosetsRoutingModule } from './closets-routing.module';
import { ClosetsComponent } from './closets/closets.component';


@NgModule({
  declarations: [
    ClosetsComponent
  ],
  imports: [
    CommonModule,
    ClosetsRoutingModule
  ]
})
export class ClosetsModule { }
