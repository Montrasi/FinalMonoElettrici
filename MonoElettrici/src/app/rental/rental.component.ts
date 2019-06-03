import { Component, OnInit, Input, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { VehiclesComponent } from '../vehicles/vehicles.component';

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
  currentUser: any; currentTime: any; currentDiff: number; currentDayTimes: any;

  public message;

  btnVwYes: boolean; btnVwNot: boolean;

  constructor(private http: HttpClient, private vhcComp: VehiclesComponent) {
    this.btnVwYes = true;
    this.btnVwNot = false;
  }
  //if(this.value.state == false ) { this.Rental == 'Noleggia' } else { this.Rental == 'Fine noleggio' }


  onRental() {
    this.currentUser = localStorage.getItem('currentUser')
    //console.log(this.currentUser);


    if (this.currentUser != null) {
      //console.log('riconosco che ti sei registrato!' + this.value.state);
      if (this.value.stateVhc == 'NOLEGGIA') {

        this.value.stateVhc = 'NOLEGGIATO'
        this.value.state = true
        this.Rental = 'Fine Noleggio'

        this.btnVwYes = false;
        this.btnVwNot = true;

        var temp = new Date();
        var currentDayTime = temp.toLocaleString().split(', ')

        this.http.post(DirectToCod.AccessHttp_MonoOffice + 'getRental', {
          'tag': this.value.tag,
          'user': this.currentUser,
          'stateVhc': this.value.stateVhc,
          'state': this.value.state,
          'date': currentDayTime[0],
          'time': currentDayTime[1]
        }).subscribe(data => {
          this.value.state = true
        })
      } else {

        this.value.stateVhc = 'NOLEGGIA'
        this.value.state = false
        this.Rental = 'Noleggia'

        this.btnVwYes = true;
        this.btnVwNot = false;


        this.http.post(DirectToCod.AccessHttp_MonoOffice + 'getRental', JSON.stringify({
          'tag': this.value.tag,
          'stateVhc': this.value.stateVhc,
          'state': this.value.state
        }),
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'Access-Control-Allow-Origin': '*'
            })
          }).subscribe(data => {
            //console.log(data);
            this.onCalcRent(data);
            this.value.state = false
          })
      }
    } else {
      console.log('Effettua il login!!')
      this.message = new alert('Effettua il login!!');
    }
  }


a:any;
  onCalcRent(data: any) {

    data.forEach(element => {
      this.currentTime = element.time
    });

    var temp = new Date();
    this.currentDayTimes = temp.toLocaleString().split(',')

    this.a = this.currentDayTimes[0] + " " + this.currentDayTimes[1]

    console.log(this.currentDayTimes[1].getTime() +  " "  + this.currentTime.getTime())

    let currentDiff = this.currentDayTimes[1].getTime() - this.currentTime.getTime()
    console.log(currentDiff)

this.message = new alert("RIPARTI DA QUI!!!!");


    //this.message = new alert("Il costo del noleggio e': " + this.currentDiff + " euro");

  }

  ngOnInit() { console.log('Component rental'); }

}
