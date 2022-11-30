import { Injectable } from '@angular/core';
import { IcitiesInfo } from '../interfaces/icities-info';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {

   cityInfo:IcitiesInfo[] = [
    {name:'Tokyo', attractionSites:['Meiji Shrine', 'Shinjuku Gyoen National Garden', 'Shibuya Crossing', 'Tokyo Sky Tree']},
    {name:'Yokohama', attractionSites:['Hakkeikima Sea Paradise', 'Minato Mirai 21', 'Sankeien Garden', 'Cup Noodles Museum Yokohama']},
    {name:'Osaka', attractionSites:['Universal Studios Japan', 'Osaka Castle', 'Shitennō-ji Temple', 'Tempozan Ferris Wheel and Harbor Village']},
    {name:'Nagoya', attractionSites:['Atsuta Jingu(Shrine)', 'Nagoya Castle', 'Legoland Japan', 'The Port of Nagoya']},
    {name:'Sapporo', attractionSites:['Odori Park', 'Hokkaidō Shrine', 'Sapporo Beer Museum', 'Jonzankei Onsen Hot Spring']}
  ]

  constructor() {}


  citiesInfoArray(){
    return this.cityInfo;
  }

}
