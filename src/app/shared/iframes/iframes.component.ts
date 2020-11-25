import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframes',
  templateUrl: './iframes.component.html',
  styleUrls: ['./iframes.component.scss']
})
export class IframesComponent implements OnInit {

  @Input() iframeID: any;

  iFrameUrl: SafeResourceUrl;


  showIframe = false;
  iframe_id;


  constructor(private sanitizer: DomSanitizer) {
    this.iFrameUrl=  this.sanitizer.bypassSecurityTrustResourceUrl('/iframe1');
   }

  ngOnInit(): void {

    setTimeout(() => {
      this.iframe_id = this.iframeID;
      this.showIframe = true;
    }, 10);
  }
  
}
