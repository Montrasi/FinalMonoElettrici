import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as DirectToCod from '../StringHTTP_ToCodeny';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  data: boolean;
  result: any;

  constructor(private http: HttpClient, private AppComp: AppComponent) { }

  onClickLog(user: HTMLInputElement, pass: HTMLInputElement): boolean {
    if (user.value == '' || pass.value == '') {
      this.result = ('Tutti i campi sono obbligatori!');
      console.log(this.result)
    } else {

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
          //console.log('data : ' + data);

          if (data == true) {
            this.AppComp.messageEvent(user.value);
            this.result = 'login effettuato con successo';
          } else {
            this.result = "l'utente non è stato trovato";
          }

          localStorage.setItem('currentUser', user.value);

        })
    }
    return false;
  }




  ngOnInit() { console.log('Component login'); }
}
