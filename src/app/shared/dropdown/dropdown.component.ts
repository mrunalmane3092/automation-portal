import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  selectDropDown;
  selectDropDowncopy;
  ngOnInit(): void {
    this.selectDropDown = [
      {
        "option": "Drop-Down Option 1",
        "value": "drop-down 1"
      },
      {
        "option": "Drop-Down Option 2",
        "value": "drop-down 2"
      },
      {
        "option": "Drop-Down Option 3",
        "value": "drop-down 3"
      },
      {
        "option": "Drop-Down Option 4",
        "value": "drop-down 4"
      },
    ];

    this.selectDropDowncopy = [
      {
        "option": "Drop-Down Option 1",
        "value": "drop-down 1"
      },
      {
        "option": "Drop-Down Option 2",
        "value": "drop-down 2"
      },
      {
        "option": "Drop-Down Option 3",
        "value": "drop-down 3"
      },
      {
        "option": "Drop-Down Option 4",
        "value": "drop-down 4"
      },
    ];
  }

}
