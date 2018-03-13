import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import { FormsModule } from '@angular/forms';
import { RacingDataService } from './car-parts/racing-data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, CarPartsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [ RacingDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
