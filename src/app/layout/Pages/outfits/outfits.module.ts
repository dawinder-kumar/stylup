import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutfitsRoutingModule } from './outfits-routing.module';
import { OutfitsComponent } from './outfits/outfits.component';


@NgModule({
  declarations: [
    OutfitsComponent
  ],
  imports: [
    CommonModule,
    OutfitsRoutingModule
  ]
})
export class OutfitsModule { }
