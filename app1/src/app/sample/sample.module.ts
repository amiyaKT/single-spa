import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { Comp1Component } from './comp1/comp1.component';


@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
