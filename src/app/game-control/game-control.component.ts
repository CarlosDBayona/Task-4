import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEvent = new EventEmitter<{ lastnumber: number }>();
  interval;
  num: number;
  timerOn: boolean;

  constructor() {
    this.num = 0;
    this.timerOn = false;
  }

  ngOnInit() {
  }

  startEvent() {
    this.timerOn = true;
    this.stopEvent();
    this.interval = setInterval(() => {
      this.num++;
      this.intervalEvent.emit({lastnumber: this.num});
    }, 3000);
  }

  stopEvent() {
    this.num = 0;
    this.intervalEvent.emit({lastnumber: this.num});
  }
}
