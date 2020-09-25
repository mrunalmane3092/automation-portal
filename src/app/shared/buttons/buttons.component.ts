import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  showPortal = false;

  onClickReload() {
    window.location.reload();
  }

  openNewTab() {
    window.open('/about', '_blank');
  }

  openNewWindow() { 
    window.open('/window', '/window', 'width=800,height=400,left=200,top=200');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
