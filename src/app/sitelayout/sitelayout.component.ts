import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sitelayout',
  templateUrl: './sitelayout.component.html',
  styleUrls: ['./sitelayout.component.scss']
})
export class SitelayoutComponent implements OnInit {

elemHeight;
fitCount;
fixedHeight = 120;
showMore = false;
subMenu_optns = false;

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
    private eRef: ElementRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scrollIntoView('searchComponent');

    this.collect();
    $(window).resize(this.collect);
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


  showOptns(){
    this.collect();
    this.subMenu_optns = true;
    $('#submenu').show();
  }




  @HostListener('window:resize', ['$event'])
  collect() {
    let height = window.innerHeight;
    const menu = $('ul#menu');
    this.elemHeight = menu.height();
    this.fixedHeight = 90;

    this.fitCount = Math.floor(height / this.fixedHeight) - 1;

    let collectedSet = menu.children(":gt(" + this.fitCount + ")");
    $('#submenu').empty().append(collectedSet.clone());

    if (this.fitCount < 6) {
      this.showMore = true;
    } else {
      this.showMore = false;
    }
  }

  	@HostListener('click', ['$event'])
    onClick(event) {
        if (this.eRef.nativeElement.contains(event.target)) {
          console.log($(event.target));
          if ($(event.target)[0] != $('#submenu span')[0] && $(event.target)[0] != $('#more_btn')[0]) {
            $('#submenu').hide();
          }
        } 
    }



}
