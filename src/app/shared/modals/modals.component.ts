import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  modalShow = false;
  constructor(
  ) { }

  ngOnInit(): void {
  }

  openModal(id) {
    this.modalShow = true;
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  
  closeModal(id) {
    this.modalShow = false;
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }

  


}
