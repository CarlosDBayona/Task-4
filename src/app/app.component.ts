import {Component, OnInit, AfterViewInit, DoCheck, OnChanges, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  evenNumber: number[] = [];
  oddNumber: Number[] = [];
  constructor() {

  }

  lastnumberRegistered (eventInfo: {lastnumber: number}) {
    if (eventInfo.lastnumber === 0) {
      this.evenNumber = [];
      this.oddNumber = [];
    }
    if (eventInfo.lastnumber % 2 === 0) {
      this.evenNumber.push(eventInfo.lastnumber);
    } else {
      this.oddNumber.push(eventInfo.lastnumber);
    }
  }
}
