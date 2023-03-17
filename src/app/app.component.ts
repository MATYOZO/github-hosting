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
  add() {
    this.increase++;
  }
}
