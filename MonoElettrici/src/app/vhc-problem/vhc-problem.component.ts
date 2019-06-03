import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import * as DirectToCod from '../StringHTTP_ToCodeny';

@Component({
  selector: 'app-vhc-problem',
  templateUrl: './vhc-problem.component.html',
  styleUrls: ['./vhc-problem.component.css']
})
export class VhcProblemComponent implements OnInit {

  result: any;
  public message;

  constructor(private http: HttpClient) { }

  onClickSend(tags: HTMLInputElement, selProb: HTMLInputElement): boolean {


    if (tags.value == '' || selProb.value == '') {
      this.result = ('Tutti i campi sono obbligatori!');
      console.log(this.result)
    } else {

      this.http.post(DirectToCod.AccessHttp_MonoPattini + 'sendProblem', JSON.stringify({
        'tag': tags.value,
        'selProb': selProb.value
      }),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*'
          })
        }).subscribe(data => {
          this.message = new alert('Segnalazione avvenuta con successo!!');
        })
    }
    return false;
  }

  ngOnInit() {
  }

}
