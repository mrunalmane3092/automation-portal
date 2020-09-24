import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  
  closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }

  open(content) {
    console.log('1')
    this.modalService.open(content, {}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
  }

}
