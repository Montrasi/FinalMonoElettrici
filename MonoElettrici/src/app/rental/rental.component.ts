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
  currentUser: any;

  public message;

  btnVwYes: boolean; btnVwNot: boolean;

  constructor(private http: HttpClient, private vhcComp: VehiclesComponent) {
    this.btnVwYes = true;
    this.btnVwNot = false;
  }
  //if(this.value.state == false ) { this.Rental == 'Noleggia' } else { this.Rental == 'Fine noleggio' }


  onRental() {

    this.currentUser = localStorage.getItem('currentUser')
    console.log(this.currentUser);

    if (this.currentUser != null) {
      //console.log('riconosco che ti sei registrato!' + this.value.state);
      if (this.value.state == false) {

        this.Rental = 'Fine noleggia'
        this.btnVwYes = false;
        this.btnVwNot = true;

        var temp = new Date();
        var currentDayTime = temp.toLocaleString().split(', ')

        this.http.post(DirectToCod.AccessHttp_MonoOffice + 'getRental', {
          'tag': this.value.tag,
          'user': this.currentUser,
          'state': this.value.state,
          'date': currentDayTime[0],
          'time': currentDayTime[1]
        }).subscribe(data => {
          console.log('sdfsdfsdfsdf');
          console.log(data);
          this.vhcComp.GetRental(data);
        })
      } else {

        this.Rental = 'Noleggia'
        this.btnVwYes = true;
        this.btnVwNot = false;



        var temp = new Date();
        var currentDayTime = temp.toLocaleDateString().split(',')


        this.http.post(DirectToCod.AccessHttp_MonoOffice + 'getRental', JSON.stringify({
          'tag': this.value.tag/*,
          'state': this.value.state,
          'date': currentDayTime[0],
          'time': currentDayTime[1]*/
        }),
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'Access-Control-Allow-Origin': '*'
            })
          }).subscribe(data => {
            console.log('data fine noleggio : ' + data);
          })
      }
    } else {
      console.log('Effettua il login!!')
      this.message = new alert('Effettua il login!!');
    }


  }

  ngOnInit() { console.log('Component rental'); }

}
