import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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

//  windowHeight = window.innerHeight;
  // newleftPanelList = [

  leftPanelList= [
  {
  "key": "Search",
  "component": "searchComponent",
  "route": "",
  "icon": "fa fa-search"
  },
  {
  "key": "DropDown",
  "component": "dropdownComponent",
  "route": "",
  "icon": "fa fa-caret-square-o-down"
  },
  {
  "key": "Buttons",
  "component": "buttonComponent",
  "route": "",
  "icon": "fa fa-square"
  },
  {
  "key": "Modal",
  "component": "modalComponent",
  "route": "",
  "icon": "fa fa-window-maximize"
  },
  {
  "key": "Table",
  "component": "tableComponent",
  "route": "",
  "icon": "fa fa-table"
  },
  {
  "key": "Form",
  "component": "formComponent",
  "route": "",
  "icon": "fa fa-list-alt"
  },
  {
  "key": "IFrames",
  "component": "iframeComponent",
  "route": "",
  "icon": "fa fa-window-restore"
  },
  {
  "key": "Load Testing",
  "component": "",
  "route": "/load-testing",
  "icon": "fa fa-check"
  }
  ];

  currentRoute;
  getRouteURL;
  // leftPanelList;
  // moreArray=[];
  hiddenSubMenuLength;
  constructor(
    private eRef: ElementRef,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.collect();
    $(window).resize(this.collect);
    this.getRouteURL = this.router.url;
    this.scrollIntoView('searchComponent');
  }

  scrollIntoView(component) {
    this.currentRoute = this.router.url.split('?')[0];
    console.log(this.currentRoute)
    if (component != "") {
      if (!this.router.url.includes('portal')) {
        this.router.navigate(['/portal']);
        this.currentRoute = '/portal';
      }
      
      setTimeout(() => {
        this.location.go(this.currentRoute+'?component='+component);
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
      }, 1000);
    }


  }

  // @HostListener('window:resize', ['$event'])
  // screenSizeChange() {

  //   if (window.innerHeight - 50 < this.leftPanelList.length * 80) {
  //     let viewItemTill = Math.floor((window.innerHeight - 50) / 80);
  //     var array = [];
  //     this.moreArray = [];
  //     for (let i = 0; i < this.leftPanelList.length; i++) {
  //       if (i < viewItemTill) {
  //         array[i] = this.newleftPanelList[i];
  //       } else {
  //         this.moreArray.push(this.newleftPanelList[i])
  //       }
  //     }
  //     this.leftPanelList = array;
  //   } else {
  //     this.moreArray = [];
  //     let viewItemTill = Math.floor((window.innerHeight - 50) / 80);
  //     while (this.leftPanelList.length < viewItemTill) {
  //       this.leftPanelList.push(this.newleftPanelList[viewItemTill - 1])
  //     }
  //     for (let i = 0; i < this.newleftPanelList.length; i++) {
  //       if (i > viewItemTill - 1) {
  //         this.moreArray.push(this.newleftPanelList[i])
  //       }

  //     }
  //   }

  // }

  showOptns(){
    this.collect();
    this.subMenu_optns = true;
    $('#submenu').show();
  }




  @HostListener('window:resize', ['$event'])
  collect() {
    $('#submenu .leftPanelIcon').css('display', 'none');

    if (this.leftPanelList != undefined) {

      const leftPanelViewLength = this.leftPanelList.length - 1;
      let height = window.innerHeight;
      const menu = $('ul#menu');
      this.elemHeight = menu.height();
      this.fixedHeight = 90;

      this.fitCount = Math.floor(height / this.fixedHeight) - 1;

      let collectedSet = menu.children(":gt(" + this.fitCount + ")");
      $('#submenu').empty().append(collectedSet.clone());

      if (this.fitCount < leftPanelViewLength) {
        this.showMore = true;
      } else {
        this.showMore = false;
      }


      let len = $('#submenu li').length;

      if (len != 0) {
        localStorage.setItem('COUNT', len);
      }

      let len_count = +(localStorage.getItem('COUNT'));
      if (len_count != 0) {
        this.hiddenSubMenuLength = localStorage.getItem('COUNT');
      }
    }
  }



    @HostListener('click', ['$event'])
    onClick(event) {
      
        if (this.eRef.nativeElement.contains(event.target)) {
          if ($(event.target)[0] != $('#submenu span')[0] && $(event.target)[0] != $('#more_btn')[0]) {
            $('#submenu').hide();
          }
        } 
        var url = '';
        if (this.router.url.includes('?')) {
          url = this.router.url.split('?')[0];
        }
        // if (this.getRouteURL.includes('?')) {
        //   var url = this.getRouteURL.split('?')[0];
        // }
        
        var component;
        $("#submenu").on('click', 'li', (e) => {

          component = e.target.id;
          if (component != "") {

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
            this.locationGoTo(component);
          } else {
            
          }
        });
    }

     locationGoTo(component) {
       console.log(component);
       const val = this.router.url.split('?')[0];
          // setTimeout(() => {
            if (component != "" && val != "") {
              this.location.go(val + '?component=' + component);
            }
          // }, 1);
        }
}
