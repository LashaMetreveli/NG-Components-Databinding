import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>(); // to give parent component data from child component
  // we shiuld make it listenable from outside. we use Output() for it
  // check <app-game-control (intervalFired)="onIntervalFired($event)"></app-game-control> in app-component html
  // we use $event to pass app-component our value

  interval;
  lastNumber = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
