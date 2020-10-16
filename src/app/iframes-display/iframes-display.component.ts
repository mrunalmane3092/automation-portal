import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframes-display',
  templateUrl: './iframes-display.component.html',
  styleUrls: ['./iframes-display.component.scss']
})
export class IframesDisplayComponent implements OnInit {
  array = new Array<number>(5);
  divDisplay: string;
  selected: boolean;
  constructor() { }

  ngOnInit(): void {
    this.divDisplay = 'none';
    this.selected = true;

  }

  setDisplay(display_val){
    console.log(display_val);
  }

}
