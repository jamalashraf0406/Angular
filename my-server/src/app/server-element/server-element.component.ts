import {
  Component, Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';
import {Element} from "../common/element";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input('srvElement') element: Element;
  @Input() name: string;

  @ViewChild("heading") header: ElementRef;

  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("Constructor is called...");
  }

  ngAfterContentInit(): void {
        console.log("ngAfterContentInit() is called...");
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChange() is called...");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit() is called...");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck() is called...");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() is called...");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() is called...");
    console.log("Text Content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked() is called...");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() is called")
  }
}
