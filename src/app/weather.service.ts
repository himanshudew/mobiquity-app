import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=CITY&appid=3d8b309701a13f65b660fa2c64cdc517';

  forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=CITY&appid=3d8b309701a13f65b660fa2c64cdc517';

  getCityWeather(cityName){
    return this.http.get(this.weatherUrl.replace('CITY', cityName));
  }

  getCityForecast(cityName) {
    return this.http.get(this.forecastUrl.replace('CITY', cityName));
  }
}