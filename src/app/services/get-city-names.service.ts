import { Injectable } from '@angular/core';
import { GetWeatherService } from './get-weather.service';

@Injectable({
  providedIn: 'root'
})
export class GetCityNamesService {

  arrayWeather:any;
  arrayNames:any[] = [];

  constructor(private _getWeather: GetWeatherService) {
    
  }

  getNames() {
    this.arrayNames = [];
    this.arrayWeather = this._getWeather.getWeather();
    for(var i = 0; i < this.arrayWeather.length; i++){
      this.arrayNames.push(this.arrayWeather[i].name);
    };
    return this.arrayNames;
  };
}
