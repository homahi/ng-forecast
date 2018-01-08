import { Injectable } from '@angular/core';
import {OpenWeatherMap} from '../shared/models/open-weather-map';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class OpenWeatherMapService {
  private API = '//api.openweathermap.org/data/2.5';
  private APP_ID = '65ac578fc8b5b01cc93ebf0ffde11239';

  constructor(public http: HttpClient) { }

  /**
   * 現在の天気を取得
   * @param city
   * @returns {Observable<OpenWeatherMap.WeatherCurrent>}
   */

  current(city: string): Observable<OpenWeatherMap.Current> {
    let params: HttpParams = new HttpParams();
    const data = {
      appid: this.APP_ID,
      units: 'metric',
      lang: 'jp',
      q: city
    };

    Object.keys(data).forEach((key) => {
      params = params.set(key, data[key]);
    });
    return this.http.get<OpenWeatherMap.Current>(`$(this.API)/weather`, { params });
  }

  /**
   * 1週間の天気予報を取得
   * @param city
   * @returns {Observable<OpenWeatherMap.WeatherForecast>}
   */

  forecast(city: string): Observable<OpenWeatherMap.Forecast> {
    let params: HttpParams = new HttpParams();
    const data = {
      appid: this.APP_ID,
      units: 'metric',
      lang: 'jp',
      cnt: 7,
      q: city
    };

    Object.keys(data).forEach((key) => {
      params = params.append(key, data[key]);
    });
    return this.http.get<OpenWeatherMap.Forecast>(`${this.API}/forecast/daily`, { params });
  }
}
