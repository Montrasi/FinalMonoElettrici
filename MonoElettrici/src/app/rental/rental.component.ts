import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as DirectToCod from '../StringHTTP_ToCodeny';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  /*NOLEGGIO*/
  @Input() value: any
  @Input() btnVal: string

  Rental: string = 'Noleggia';
  currentUser: any;

  constructor(private http: HttpClient) {

    console.log(this.btnVal)
    //if(this.value.state == false ) { this.Rental == 'Noleggia' } else { this.Rental == 'Fine noleggio' }

  }

  onRental() {

    this.currentUser = localStorage.getItem('currentUser')
    console.log(this.currentUser);

    if (this.currentUser != null) {
      if (this.value.state == false) {
        console.log('vdsdfgsdgsdgsdgfdgfdg');
        var temp = new Date();
        var currentDayTime = temp.toLocaleDateString().split(',')

        this.http.post(DirectToCod.AccessHttp_MonoPattini + 'getRental', {
          'tag': this.value,
          'state': this.value,
          'date': currentDayTime[0],
          'time': currentDayTime[1]
        }).subscribe(data => {
          console.log('data inizio noleggio : ' + data);
        })
      } else {
        var temp = new Date();
        var currentDayTime = temp.toLocaleDateString().split(',')

        this.http.post(DirectToCod.AccessHttp_MonoPattini + 'getNotRental', {
          'tag': this.value,
          'state': this.value,
          'date': currentDayTime[0],
          'time': currentDayTime[1]
        }).subscribe(data => {
          console.log('data inizio noleggio : ' + data);
        })
      }
    } else { console.log('Effettua il login!!') }


  }

  ngOnInit() { console.log('Component rental'); }

}
