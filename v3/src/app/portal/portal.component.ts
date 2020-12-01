import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SitelayoutComponent } from '../sitelayout/sitelayout.component';

declare var $: any;
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  currentRoute;
  constructor(
    private location: Location,
    private router: Router,
    private sitelayout: SitelayoutComponent

  ) { 
  }

  ngOnInit(): void {
    
    this.currentRoute = this.router.url.split('?')[0];
    this.sitelayout.scrollIntoView('searchComponent');
    // this.location.go(this.currentRoute+'?component=searchComponent');

    $(() => {
      const parent = $('#portal_section');
      const divs = parent.children();
      while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }
    });
  }

}
