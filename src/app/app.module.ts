import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ArrayMethodsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
