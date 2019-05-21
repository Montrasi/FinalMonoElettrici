import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  lat: any; lng: any;
  value: string;
  zoom: number = 15;


  constructor() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = +pos.coords.latitude;
        this.lng = +pos.coords.longitude;
      });
    }
  }

  ngOnInit() {
    console.log('Component mapping');
  }
}
