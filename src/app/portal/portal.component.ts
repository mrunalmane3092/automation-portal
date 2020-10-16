import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor() { 
    // private location: Location

  }

  ngOnInit(): void {
    // this.location.go(this.currentRoute+'?component='+component);

    // $(() => {
    //   const parent = $('#portal_section');
    //   const divs = parent.children();
    //   while (divs.length) {
    //     parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    //   }
    // });
  }

}
