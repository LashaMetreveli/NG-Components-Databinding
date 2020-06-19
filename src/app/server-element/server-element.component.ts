import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;

  @ViewChild('heading') header: ElementRef; // local

  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef; // remote

  constructor() {
    console.log('inside constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(' -------------------- ');
    console.log(changes);
  }

  // name: SimpleChange
  // currentValue: "changed"
  // firstChange: false
  // previousValue: "test"

  // called during initialization

  ngOnInit(): void {
    console.log('inside ngOnInit');
  }

  // called on every new activity

  ngDoCheck() {
    console.log('inside ngDoCheck');
  }

  // A lifecycle hook that is called after Angular has fully
  // initialized all content of a directive (ng-content)

  ngAfterContentInit() {
    console.log('inside ngAfterContentInit');
  }

  // A lifecycle hook that is called after the default change
  // detector has completed checking all content of a directive.

  ngAfterContentChecked() {
    console.log(' ====== ' + this.paragraph.nativeElement.textContent);
    console.log('inside ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('inside ngAfterViewChecked');

  }

  ngAfterViewInit(): void {
    console.log('After View Init ::::: ' + this.header.nativeElement.textContent);
    console.log('inside ngAfterViewInit');

  }

  ngOnDestroy(): void {
    console.log('inside ngOnDestroy');
  }

}
