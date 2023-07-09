import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyARoutingModule } from './lazy-a-routing.module';
import { LazyAComponent } from './lazy-a.component';
import { LibraryAModule } from 'my-library';


@NgModule({
  declarations: [
    LazyAComponent
  ],
  imports: [
    CommonModule,
    LazyARoutingModule,
    LibraryAModule
  ]
})
export class LazyAModule { }
