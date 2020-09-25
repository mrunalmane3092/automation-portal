import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframes',
  templateUrl: './iframes.component.html',
  styleUrls: ['./iframes.component.scss']
})
export class IframesComponent implements OnInit {

  iFrameUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iFrameUrl=  this.sanitizer.bypassSecurityTrustResourceUrl('/iframe1')
   }

  ngOnInit(): void {
  }
  
}
