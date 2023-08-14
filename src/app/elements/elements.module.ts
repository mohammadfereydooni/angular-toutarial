import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PalceHolderComponent } from './palce-holder/palce-holder.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PalceHolderComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [
    // ElementsHomeComponent
  ]
})
export class ElementsModule { }
