import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() number: number; // THIS should be passed from outside (parent app-component). So this is input.

  constructor() {
  }

  ngOnInit(): void {
  }

}
