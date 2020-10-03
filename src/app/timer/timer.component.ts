import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import { timer } from "rxjs";


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges {
  @Input() timeIn: number;
  @Input() isOnIn: boolean;
  @Output() timeOut = new EventEmitter();
  @Output() isOnOut = new EventEmitter();

  isRunning = false;
  time: number = 0;
  timer: string = "Старт";

  ngOnInit(): void {
    timer(0, 1000).subscribe(ellapsedCycles => {
      if (this.isRunning) {
        this.time++;
        this.timeOut.emit(this.time);
      }
    });
  }
  ngOnChanges(): void{
    if(this.isOnIn == false && this.isRunning == true){
      this.toggleTimer();
    }
    if(this.timeIn >= 0) {
      this.time = this.timeIn;
    }
  }

  toggleTimer() {
    this.isRunning = !this.isRunning;
    this.isOnOut.emit(this.isRunning);
    if(this.isRunning) {
      this.timer = "Пауза";
    } else {
      this.timer = "Старт";
    }
  };
}
