import { Component, OnInit } from '@angular/core';
import { IcitiesWeather } from 'src/app/interfaces/icities-weather';
import { GetWeatherService } from 'src/app/services/get-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  img1 = "https://a.cdn-hotels.com/gdcs/production3/d339/a08760c4-932d-4055-bd82-22b6339f99d5.jpg"
  weatherData:IcitiesWeather[];

  constructor(private _weatherData:GetWeatherService) {
    this.weatherData = _weatherData.getWeather();
   }

  ngOnInit(): void {
  }

}
