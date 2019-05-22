import { Component } from '@angular/core'

import * as $ from 'jquery'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular'

  Accedi: string
  notDisable: boolean

  constructor() { }

  messageEvent(Currentuser: string) {
    //console.log('Ciaooooo ' + Currentuser)
    this.Accedi = Currentuser
  }

  ngOnInit() {

    this.Accedi = localStorage.getItem('currentUser')
    console.log('caiooooooooooooo ' + this.Accedi)

    if (this.Accedi == null) {
      this.Accedi = 'Accedi'
      this.notDisable = false
    } else {
      this.notDisable = false
    }

    $(document).ready(function() { })

  }

}
