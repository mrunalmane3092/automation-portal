import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitelayout',
  templateUrl: './sitelayout.component.html',
  styleUrls: ['./sitelayout.component.scss']
})
export class SitelayoutComponent implements OnInit {

  leftPanelList = [
    {
      "key": "Buttons",
      "route": ""
    },
    {
      "key": "Forms",
      "route": ""
    },
    {
      "key": "Modals",
      "route": ""
    },
    {
      "key": "DropDowns",
      "route": ""
    },
    {
      "key": "Tables",
      "route": ""
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
