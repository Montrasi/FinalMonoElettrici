import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppComponent } from '../app.component';

import * as DirectToCod from '../StringHTTP_ToCodeny';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(public http: HttpClient, private AppComp: AppComponent) { }

  onClickReg(name: HTMLInputElement, surname: HTMLInputElement, email: HTMLInputElement, user: HTMLInputElement, pass: HTMLInputElement): boolean {

    if (name.value == '' || surname.value == '' || email.value == '' || user.value == '' || pass.value == '') {
      this.error = ('Tutti i campi sono obbligatori!');
      console.log(this.error)
    } else {
      this.http.post(DirectToCod.AccessHttp_MonoPattini + 'register', JSON.stringify({
        'name': name.value,
        'surname': surname.value,
        'email': email.value,
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
          console.log(data)

          if (data == true) {
            this.AppComp.messageEvent(user.value);
            this.error = 'registrazione effettuata con successo';
          } else {
            this.error = "registrazione non ha avuto successo";
          }

        });
    }
    return false;
  }

  ngOnInit() {
    console.log('Component register');
    //this.AppComponent.Access = JSON.parse(localStorage.getItem('currentUser'));
  }
}
