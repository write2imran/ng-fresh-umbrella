import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyCRoutingModule } from './lazy-c-routing.module';
import { LazyCComponent } from './lazy-c.component';
// import { LibraryCModule } from 'my-library';


@NgModule({
  declarations: [
    LazyCComponent
  ],
  imports: [
    CommonModule,
    LazyCRoutingModule,
    // LibraryCModule
  ]
})
export class LazyCModule { }
