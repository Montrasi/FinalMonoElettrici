import { Component, OnInit } from '@angular/core';

import { VehiclesComponent } from '../vehicles/vehicles.component';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  lat: any; lng: any; latVcl: any; lngVcl: any; data: any;
  value: string;
  zoom: number = 15;


  constructor(public vehic: VehiclesComponent) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        //this.lat = +pos.coords.latitude;
        //this.lng = +pos.coords.longitude;
        this.lat = 45.540066;
        this.lng = 9.132749;
      });

      //this.data = this.vehic.getValue();
      /*this.latVcl = this.data.pos[0].lat
      this.lngVcl = this.data.pos[0].lng
      this.value = this.data.tag + ' ' + this.data.state*/

    }
  }

  ngOnInit() {
    console.log('Component mapping');
  }
}
