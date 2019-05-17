import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppComponent } from '../app.component';

import * as DirectToCod from '../StringHTTP_ToCodeny';


@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  data: string;
  error: string;
  temp: any;

  constructor(public http: HttpClient, private AppComp: AppComponent) { }


  onClickLog(user: HTMLInputElement, pass: HTMLInputElement): boolean {
    if (user.value == '' || pass.value == '') {
      this.error = ('Tutti i campi sono obbligatori!');
      console.log(this.error)
    } else {

      this.http.post(DirectToCod.AccessHttp + 'login', JSON.stringify({
        'user': user.value,
        'pass': pass.value
      }),
       {
          headers: new HttpHeaders ({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*'
          })
        }).subscribe(data => {
        console.log('data : ' + data);

        if(data == 'ko'){
          this.AppComp.messageEvent(user.value);
          this.error = 'login effettuato con successo';
        }else{
          this.error = "l'utente non è stato trovato";
        }

        localStorage.setItem('currentUser',  JSON.stringify(user.value));

    })
    }
    return false;
  }

  ngOnInit() {
    console.log('Component login');
  }
}
