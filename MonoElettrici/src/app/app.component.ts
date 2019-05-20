import { Component  } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  Access: string;
  dataStr: string = '';

  messageEvent(Currentuser: string) {
    //console.log('Ciaooooo ' + Currentuser)
    this.Access = Currentuser;
  }



  constructor(private modalService: NgbModal) { }


  /* Instruction control Modal box Log in or Register */

  open(content) {
    this.modalService.open(content);
  }

  public toggle(content): void {
    this.modalService.dismissAll(content);
  }

  ngOnInit() {
    this.Access = JSON.parse(localStorage.getItem('currentUser'));

    if(this.Access != ''){ this.Access = 'Accedi' }

  }

}
