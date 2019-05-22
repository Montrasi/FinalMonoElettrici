import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  lat: any; lng: any; iconPosOmino: any;
  value: string;
  zoom: number = 15;

  constructor() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        //this.lat = +pos.coords.latitude
        //this.lng = +pos.coords.longitude
        this.lat = 45.540014
        this.lng = 9.132803
      });
    }
    this.iconPosOmino = {
      url: './assets/images/markerOmino.png',
      scaledSize: {
        width: 75,
        height: 75
      }
    }
  }

  ngOnInit() {
    console.log('Component mapping');
  }
}
