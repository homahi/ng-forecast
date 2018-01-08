import { BrowserModule } from '@angular/platform-browser';
import { OpenWeatherMapService } from './services/open-weather-map.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  MatToolbarModule,
  MatProgressBarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AreaEditComponent } from './area-edit/area-edit.component';
import { ForecastComponent } from './forecast/forecast.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AreaEditComponent,
    ForecastComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OpenWeatherMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
