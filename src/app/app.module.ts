import { BrowserModule } from '@angular/platform-browser';
import { LoadingInterceptor } from './loading-interceptor';
import { LoadingService } from './services/loading.service';
import { OpenWeatherMapService } from './services/open-weather-map.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';

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
import { UnixTimeDatePipe } from './pipes/unix-time-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AreaEditComponent,
    ForecastComponent,
    UnixTimeDatePipe
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
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoadingService, OpenWeatherMapService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
