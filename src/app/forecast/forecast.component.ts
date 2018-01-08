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
  public forecastObservable: Observable<OpenWeatherMap.Forecast>;

  constructor(
    private route: ActivatedRoute,
    private openWeatherMapService: OpenWeatherMapService
  ) { }

  ngOnInit() {
    // 現在の天気
    this.currentWeatherObservable =
      this.route.params.switchMap((param: { city: string; }) => {
        return this.openWeatherMapService.current(param.city);
      });

    // 一週間の天気予報を取得
    this.forecastObservable = this.route.params.switchMap(param => {
      return this.openWeatherMapService.forecast(param.city);
    });
  }

}
