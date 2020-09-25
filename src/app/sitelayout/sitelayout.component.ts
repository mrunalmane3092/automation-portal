import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sitelayout',
  templateUrl: './sitelayout.component.html',
  styleUrls: ['./sitelayout.component.scss']
})
export class SitelayoutComponent implements OnInit {
  windowHeight = window.innerHeight;
  newleftPanelList = [
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
  leftPanelList;
  moreArray=[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scrollIntoView('searchComponent');
    this.leftPanelList = this.newleftPanelList;
    this.screenSizeChange();
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

  
  @HostListener('window:resize', ['$event'])
  screenSizeChange() {

    if (window.innerHeight - 50 < this.leftPanelList.length * 80) {
      let viewItemTill = Math.floor((window.innerHeight - 50) / 80);
      var array = [];
      this.moreArray = [];
      for (let i = 0; i < this.leftPanelList.length; i++) {
        if (i < viewItemTill) {
          array[i] = this.newleftPanelList[i];
        } else {
          this.moreArray.push(this.newleftPanelList[i])
        }
      }
      this.leftPanelList = array;
    } else {
      this.moreArray = [];
      let viewItemTill = Math.floor((window.innerHeight - 50) / 80);
      while (this.leftPanelList.length < viewItemTill) {
        this.leftPanelList.push(this.newleftPanelList[viewItemTill - 1])
      }
      for (let i = 0; i < this.newleftPanelList.length; i++) {
        if (i > viewItemTill - 1) {
          this.moreArray.push(this.newleftPanelList[i])
        }

      }
    }

  }
  
}
