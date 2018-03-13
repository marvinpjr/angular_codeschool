import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, CarPartsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
