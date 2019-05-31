import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as DirectToCod from '../StringHTTP_ToCodeny';
import * as $ from 'jquery';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  latVhc: any; lngVhc: any; value: any; iconPosPattino: any;
  data: Object[];

  btnVal: string = 'btnNol';

  constructor(public http: HttpClient) {


    this.http.get<Object[]>(DirectToCod.AccessHttp_MonoOffice + 'getVeicoli')
      .subscribe(data => {
        this.data = data;

        //console.log(this.data)

      })

    this.iconPosPattino = {
      url: './assets/images/markerPattino.png',
      scaledSize: {
        width: 75,
        height: 75
      }
    }

  }

  GetRental(data: Object) {

    //console.log('GetRental Recharge ' + data);

    $(document).ready(function() {
      if($('#tags').text() == data['tags']){  $('#pippo').text('cacca'/*data['states']*/)}

      //RIPARTI DA QUI!!!!

      alert('RIPARTI DA QUI!!!! ' + data['tags'] + ' ' + data['states'] );
    });



    /*this.http.get<Object[]>(DirectToCod.AccessHttp_MonoOffice + 'getVeicoli')
      .subscribe(data => {
        this.data = data;

        //console.log(this.data)

      })

    this.iconPosPattino = {
      url: './assets/images/markerPattino.png',
      scaledSize: {
        width: 75,
        height: 75
      }
    }*/

  }


  ngOnInit() {

    console.log('component vehicles');

  }

}
