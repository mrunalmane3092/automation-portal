import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-load-testing',
  templateUrl: './load-testing.component.html',
  styleUrls: ['./load-testing.component.scss']
})
export class LoadTestingComponent implements OnInit {

  iframe_links = [];
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.iframe_links = [{ link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc')},
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') },
      { link: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-UqqYmYVXLc') }
     ];

  }

}
