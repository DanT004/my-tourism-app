import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  spanNumber:number = 2
  name: string | null | undefined;
  springN: string | null | undefined;
  springM: string | null | undefined;
  summerN: string | null | undefined;
  summerM: string | null | undefined;
  winterN: string | null | undefined;
  winterM: string | null | undefined;
  autumnN: string | null | undefined;
  autumnM: string | null | undefined;
  visitFrom: string | null | undefined;
  visitTo: string | null | undefined;

  constructor(private route: ActivatedRoute) { 
    route.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.springN = params.get('springN');
      this.springM = params.get('springM');
      this.summerN = params.get('summerN');
      this.summerM = params.get('summerM');
      this.winterN = params.get('winterN');
      this.winterM = params.get('winterM');
      this.autumnN = params.get('autumnN');
      this.autumnM = params.get('autumnM');
      this.visitFrom = params.get('visitFrom');
      this.visitTo = params.get('visitTo');
    })
  }

  ngOnInit(): void {
  }

}
