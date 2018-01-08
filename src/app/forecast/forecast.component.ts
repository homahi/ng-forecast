import { Component, OnInit } from '@angular/core';
import { OpenWeatherMap } from '../shared/models/open-weather-map';
import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public currentWeatherObservable: Observable<OpenWeatherMap.Current>;

  constructor(
    private route: ActivatedRoute,
    private openWeatherMapService: OpenWeatherMapService
  ) { }

  ngOnInit() {
    this.currentWeatherObservable =
      this.route.params.switchMap((param: { city: string; }) => {
        return this.openWeatherMapService.current(param.city);
      });
  }

}
