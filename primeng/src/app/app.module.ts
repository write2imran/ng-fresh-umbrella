import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { ProductService } from './service/productservice';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
