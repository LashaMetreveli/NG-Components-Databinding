import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message: any;

  serverElements = [{type: 'server', name: 'test', content: 'content'}];

  // assigment part
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];



  ngOnInit(): void {
    this.message = 'დირექტივის მაგალითი';
  }


  // takes data from cockpit event emmiter -- serverCreated --
  // data is written inside our array

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

// takes data from cockpit event emmiter -- blueprintCreated --

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onDestroyFirst() {
    console.log(this.serverElements.length);
    this.serverElements.splice(0, 1);
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed';
  }

  // assigment part

  onIntervalFired(firedNumber: number) {
    if ( firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else { this.oddNumbers.push(firedNumber); }
  }

}

