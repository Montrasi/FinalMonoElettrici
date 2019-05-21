import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//import { logger } from './logger.model';

import * as DirectToCod from '../StringHTTP_ToCodeny';
import * as $ from 'jquery';


@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  data: boolean;
  result: any;

  constructor(private http: HttpClient, private AppComp: AppComponent, /*private log: logger*/) { }

  onClickLog(user: HTMLInputElement, pass: HTMLInputElement): boolean {
    if (user.value == '' || pass.value == '') {
      this.result = ('Tutti i campi sono obbligatori!');
      console.log(this.result)
    } else {

      //this.result = this.log.logging(user.value, pass.value);

      this.http.post(DirectToCod.AccessHttp_MonoPattini + 'login', JSON.stringify({
        'user': user.value,
        'pass': pass.value
      }),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*'
          })
        }).subscribe(data => {
          console.log('data : ' + data);

          if (data == true) {
            this.AppComp.messageEvent(user.value);
            this.result = 'login effettuato con successo';
          } else {
            this.result = "l'utente non è stato trovato";
          }

          localStorage.setItem('currentUser', JSON.stringify(user.value));

        })
    }
    return false;
  }




  ngOnInit() {
    console.log('Component login');


    /*$(document).ready(function() {

    });*/



  }
}
