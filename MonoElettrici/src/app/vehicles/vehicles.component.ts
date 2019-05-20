import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as DirectToCod from '../StringHTTP_ToCodeny';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  data: any;
  obj: object;

  constructor(public http: HttpClient) { }

  getValue() {

    this.http.get(DirectToCod.AccessHttp + 'getVeicoli')
      .subscribe(data => {
        this.data = data;

        this.data.forEach(element => {
          this.obj = { 'tag': element.tag, 'pos': element.pos, 'state': element.state }
        });

        return this.obj

      })

  }

  ngOnInit() {

    console.log('component vehicles');

  }

}
