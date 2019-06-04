import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular'

  Accedi: string
  notDisable: boolean; logIn: boolean; logOut: boolean;

  constructor() { this.logIn = true; this.logOut = false }

  messageEvent(Currentuser: string) {
    this.Accedi = Currentuser

    this.logIn = false;
    this.logOut = true;

  }

  onClickLogOut() {

    console.log('risettiamo il localstorage');

    this.Accedi = 'Accedi'
    localStorage.setItem('currentUser', null)

    this.logIn = true;
    this.logOut = false;

  }

  ngOnInit() {

    this.Accedi = localStorage.getItem('currentUser')

    if (this.Accedi == 'null') {

      this.logIn = true;
      this.logOut = false;

      this.Accedi = 'Accedi'
      this.notDisable = false
    } else {
      this.notDisable = false

      this.logIn = false;
      this.logOut = true;

    }
  }

}
