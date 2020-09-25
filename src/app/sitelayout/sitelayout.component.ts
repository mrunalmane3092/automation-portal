import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sitelayout',
  templateUrl: './sitelayout.component.html',
  styleUrls: ['./sitelayout.component.scss']
})
export class SitelayoutComponent implements OnInit {

  leftPanelList = [
    {
      "key": "Search",
      "component": "searchComponent",
      "icon": "fa fa-search"
    },
    {
      "key": "DropDown",
      "component": "dropdownComponent",
      "icon": "fa fa-caret-square-o-down"
    },
    {
      "key": "Buttons",
      "component": "buttonComponent",
      "icon": "fa fa-square"
    },
    {
      "key": "Modal",
      "component": "modalComponent",
      "icon": "fa fa-window-maximize"
    },
    {
      "key": "Table",
      "component": "tableComponent",
      "icon": "fa fa-table"
    },
    {
      "key": "Form",
      "component": "formComponent",
      "icon": "fa fa-list-alt"
    },
    {
      "key": "IFrames",
      "component": "iframeComponent",
      "icon": "fa fa-window-restore"
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scrollIntoView('searchComponent');
  }

  scrollIntoView(component) {

    if (!this.router.url.includes('portal')) {
      this.router.navigate(['/portal']);
    }
    
    setTimeout(() => {
      const element = document.getElementById(component);
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 0);

  }
}
