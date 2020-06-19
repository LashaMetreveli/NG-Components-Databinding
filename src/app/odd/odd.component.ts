import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() number: number; // THIS should be passed from outside (parent app-component). So this is input.

  constructor() {
  }

  ngOnInit(): void {
  }

}
