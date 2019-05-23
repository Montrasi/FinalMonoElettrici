import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as DirectToCod from '../StringHTTP_ToCodeny';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  /*NOLEGGIO*/

  currentTime: any; currentDay: any;
  state: boolean;
  Rental: string = 'Noleggia';
  data = new Date();

  constructor(private http: HttpClient) { }

  onRental(tagVhc: HTMLInputElement) {
    this.currentTime = this.data.getHours() + ':' + this.data.getMinutes() + ':' + this.data.getSeconds()
    this.currentDay = this.data.getMonth() + '/' + this.data.getDate() + '/' + this.data.getFullYear();

    console.log(this.currentDay + ' ' + this.currentTime + ' ' + tagVhc);

    /*this.http.post(DirectToCod.AccessHttp_MonoPattini + 'getRental', {
      'tag': tagVhc,
      'state': this.state,
      'date':  this.currentTime,
      'time': this.currentDay
    }).subscribe(data => {
        console.log('data Noleggio : ' + data);
      })*/
    }


  ngOnInit() { console.log('Component rental'); }

}
