import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  new = false;
  timer: string = "Добавить счетчик";
  list: number[] = [0,0];
  states: boolean[] = [false,false];
  dates: any[] = [];

  showTimer() {
    this.new=!this.new;
    if(this.new){
      this.timer = "Убрать счетчик";
    }else{
      this.timer = "Добавить счетчик";
    }
  }

  catchTime(ev, i) {
    this.list[i] = ev;
  }

  stateTime(ev, i) {
    this.dates[i] = Date();
    this.states[i] = ev;
  }

  logicTime(i) : boolean {
    if (this.dates[1] <= this.dates[0]) {
      if (this.states[i] == true) {
        if (this.states[i + 1] == true) {
          this.states[i + 1] = false;
        }
        } else {
          return false;
        }
      } else {
      if (this.states[i] == true) {
        if (this.states[i - 1] == true) {
          this.states[i - 1] = false;
        }
      } else {
        return false;
      }
    }
  }

  countTimers() {
    alert(this.list[0] + this.list[1]);
    this.states[0] = this.states[1] = false;
  }
}
