import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-testing',
  templateUrl: './load-testing.component.html',
  styleUrls: ['./load-testing.component.scss']
})
export class LoadTestingComponent implements OnInit {
  array = new Array<number>(10);
  constructor() { }

  ngOnInit(): void {
  }

}
