import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  openNewTab(){
    window.open('https://myguide.org/digital-adoption-platform', '_blank');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
