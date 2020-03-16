import { Component, ElementRef,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }
 
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/f1.jpg')";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundAttachment = 'fixed';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat = "no-repeat";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundPosition="center"; 
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";
    
  }

}
