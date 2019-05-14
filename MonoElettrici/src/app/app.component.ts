import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  public isViewable: boolean;

  constructor(private modalService: NgbModal) { }

  /* Instruction control Modal box Log in or Register */

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    this.isViewable = true;
  }

  public toggle(content): void {
    this.modalService.dismissAll(content);
    this.isViewable = !this.isViewable;
  }

}
