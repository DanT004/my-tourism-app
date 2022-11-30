import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IcitiesInfo } from 'src/app/interfaces/icities-info';
import { GetcitiesService } from 'src/app/services/getcities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  img1 = "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt6e1661a50f2abf0b/60ab379977e996669f49e985/US_Japan_Japan_Header.jpg?width=1680&quality=70&auto=webp"
  cities!:IcitiesInfo[];
  color;

  constructor(private _cities:GetcitiesService,) { 
    this.cities = _cities.citiesInfoArray();
    this.color = this.colorit();
  }

  ngOnInit(): void {
  }

  colorit(){
    for (var i=0; i < this.cities.length; i++){
      if (this.cities[i].attractionSites.length < 3) {
        return false;
      }
    }
    return true;
  }

}
