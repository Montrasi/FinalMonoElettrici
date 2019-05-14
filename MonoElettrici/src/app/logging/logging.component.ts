import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  data: Object;

  constructor(public http: HttpClient) { }


  ngOnInit() {
    console.log('CIAOOOOO');


    this.http.get('http://node15.codenvy.io:32978/getData', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*'
        })
    }).subscribe(data => {
      console.log(data);
    });
  }
}
