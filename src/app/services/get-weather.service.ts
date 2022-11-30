import { Injectable } from '@angular/core';
import { IcitiesWeather } from '../interfaces/icities-weather';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  cityWeather:IcitiesWeather[] = [
    {name:'Tokyo', springM:20, springN:13, summerM:29, summerN:24, winterM:2, winterN:-1, autumnM:17, autumnN:9, visitFrom:'February', visitTo:'April'},
    {name:'Yokohama', springM:19, springN:15, summerM:25, summerN:20, winterM:0, winterN:-10, autumnM:12, autumnN:8, visitFrom:'April', visitTo:'July'},
    {name:'Osaka', springM:29, springN:19, summerM:32, summerN:26, winterM:-3, winterN:-10, autumnM:12, autumnN:7, visitFrom:'August', visitTo:'October'},
    {name:'Nagoya', springM:25, springN:22, summerM:28, summerN:22, winterM:1, winterN:-4, autumnM:12, autumnN:6, visitFrom:'November', visitTo:'January'},
    {name:'Sapporo', springM:20, springN:15, summerM:32, summerN:27, winterM:0, winterN:-1, autumnM:12, autumnN:4, visitFrom:'January', visitTo:'March'},
  ]

  constructor() { }

  getWeather(){
    return this.cityWeather;
  }

}
