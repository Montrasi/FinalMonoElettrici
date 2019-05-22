import { Component  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  Accedi: string;
  dataStr: string = '';


  constructor() { }

  messageEvent(Currentuser: string) {
    //console.log('Ciaooooo ' + Currentuser)
    this.Accedi = Currentuser;
  }

  ngOnInit() {
    this.Accedi = JSON.parse(localStorage.getItem('currentUser'));

    if(this.Accedi != ''){ this.Accedi = 'Accedi' }

  }

}
