import { Component, 
  Input, 
  OnInit, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy, 
  ContentChild,
  ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit , OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: string
  @ContentChild('contentParagraph') paragraph: ElementRef


  constructor() { 
    console.log("Constructor Called");
  }


  ngOnInit(): void {
    console.log("ngOnInit Called");
    //console.log("Text Content :" + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called");
    console.log(changes)
  }

  ngDoCheck() {
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Called");
    console.log("Text Content :" + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Called");

  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Called");
  }
}
