import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b/b.component';



@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BComponent]
})
export class LibraryBModule { }
