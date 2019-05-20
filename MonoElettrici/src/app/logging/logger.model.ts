/*
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';

import * as DirectToCod from '../StringHTTP_ToCodeny';

export class logger {

  result: any;

  constructor(private http: HttpClient, private AppComp: AppComponent) { }

  logging(user: string, pass: string) {
    this.http.post(DirectToCod.AccessHttp + 'login', JSON.stringify({
      'user': user,
      'pass': pass
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
          this.AppComp.messageEvent(user);
          this.result = 'login effettuato con successo';
        } else {
          this.result = "l'utente non è stato trovato";
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
      })

    return this.result;
  }
}
*/
