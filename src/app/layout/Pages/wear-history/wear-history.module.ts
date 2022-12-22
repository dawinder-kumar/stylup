import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WearHistoryRoutingModule } from './wear-history-routing.module';
import { WearHistoryComponent } from './wear-history/wear-history.component';


@NgModule({
  declarations: [
    WearHistoryComponent
  ],
  imports: [
    CommonModule,
    WearHistoryRoutingModule
  ]
})
export class WearHistoryModule { }
