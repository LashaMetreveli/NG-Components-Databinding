import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Input() message: string;

  @Output()
  serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output()
  blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  @ViewChild('serverNameInput') serverNameInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit(
      {
        serverName: this.serverNameInput.nativeElement.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        serverName: this.serverNameInput.nativeElement.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
  }

}
