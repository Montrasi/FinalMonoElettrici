import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  o: Observable<Object>;
  error: string;

  constructor(public http: HttpClient, private modalService: NgbModal) { }

  onClickReg(name: HTMLInputElement, surname: HTMLInputElement, email: HTMLInputElement, user: HTMLInputElement, pass: HTMLInputElement): void {

    if (name.value == '' || surname.value == '' || email.value == '' || user.value == '' || pass.value == '') {
      this.error = ('Tutti i campi sono obbligatori!');
      console.log(this.error)
    } else {
      this.http.post('http://node12.codenvy.io:48876/register', JSON.stringify({
        'name': name.value,
        'surname': surname.value,
        'email': email.value,
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
          console.log(data)
        });
    }
  }

  ngOnInit() {


  }
}
