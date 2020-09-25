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
      "component": "searchComponent"
    },
    {
      "key": "DropDown",
      "component": "dropdownComponent"
    },
    {
      "key": "Buttons",
      "component": "buttonComponent"
    },
    {
      "key": "Modal",
      "component": "modalComponent"
    },
    {
      "key": "Table",
      "component": "tableComponent"
    },
    {
      "key": "Form",
      "component": "formComponent"
    },
    {
      "key": "IFrames",
      "component": "iframeComponent"
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
