import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  new = false;
  timer2: string = "Добавить счетчик";
  list: number[] = [0,0];
  states: boolean[] = [false,false];
  dates: any[] = [];

  toggleTimer() {
    this.new=!this.new;
    if(this.new){
      this.timer2 = "Убрать счетчик";
    }else{
      this.timer2 = "Добавить счетчик";
    }
  }

  catchTimer1(ev) {
    this.list[0] = ev;
  }

  catchTimer2(ev) {
    this.list[1] = ev;
  }

  stateTimer1(ev) {
    this.dates[0] = Date();
    this.states[0] = ev;
  }

  stateTimer2(ev){
    this.dates[1] = Date();
    this.states[1] = ev;
  }

  logicTimer1() {
    if (this.dates[1] <= this.dates[0] || this.states[0] == false) {
      if (this.states[0] == true) {
        if (this.states[1] == true) {
          this.states[1] = false;
        }
      }else {
        return false;
      }
    }
  }

  logicTimer2() {
    if (this.states[1] == true) {
      if (this.states[0] == true) {
        this.states[0] = false;
      }
    }else {
      return false;
    }
  }

  countTimers() {
    alert(this.list[0] + this.list[1]);
    this.states[0] = this.states[1] = false;
  }
}
