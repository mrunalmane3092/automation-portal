import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  loadForm = false;
  constructor(
  ) { }

  ngOnInit(): void {
  }

  openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "block";
    this.loadForm = true;
  }
  
  closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
    this.loadForm = false;
  }

  


}
