import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image1 = "https://media.cntraveler.com/photos/591dd1f2452a0b1d1cfbec51/16:9/w_2560%2Cc_limit/GettyImages-477329063.jpg"
  image2 = "https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Japan-Nachisan-Seiganto_189118511-1440x823-1.jpg"
  image3 = "http://cdn.cnn.com/cnnnext/dam/assets/220517023055-kyoto-stock.jpg"
  image4 = "https://imageio.forbes.com/specials-images/imageserve/968162396/0x0.jpg?format=jpg&crop=5854,3678,x0,y229,safe&width=1200"

  constructor() { }

  ngOnInit(): void {
  }

}
