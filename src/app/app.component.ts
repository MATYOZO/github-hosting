import { Component } from '@angular/core';
import { pytania } from './interfaces/pytania';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Familiada';
  pytania: pytania[] = [
    {
      id: 1,
      p1: 'koszula',
      p2: 'zebra',
      p3: 'przejście dla pieszych',
      p4: 'skarpety',
      p5: 'osa',
      p6: 'krawat',
    },
    {
      id: 2,
      p1: 'pogoda',
      p2: 'spodnie',
      p3: 'chodzenie do szkoły',
      p4: 'koszula',
      p5: 'płaszcz',
    },
  ];
  increase: number = 1;
  p1: boolean = false;
  p2: boolean = false;
  p3: boolean = false;
  p4: boolean = false;
  p5: boolean = false;
  p6: boolean = false;
  p7: boolean = false;
  p8: boolean = false;
  p9: boolean = false;
  add() {
    this.increase++;
    this.p1 = false;
    this.p2 = false;
    this.p3 = false;
    this.p4 = false;
    this.p5 = false;
    this.p6 = false;
    this.p7 = false;
    this.p8 = false;
    this.p9 = false;
  }
  p1f() {
    this.p1 = true;
  }
  p2f() {
    this.p2 = true;
  }
  p3f() {
    this.p3 = true;
  }
  p4f() {
    this.p4 = true;
  }
  p5f() {
    this.p5 = true;
  }
  p6f() {
    this.p6 = true;
  }
  p7f() {
    this.p7 = true;
  }
  p8f() {
    this.p8 = true;
  }
  p9f() {
    this.p9 = true;
  }
}
