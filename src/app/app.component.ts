import { Component, HostListener } from '@angular/core';
import { pytania } from './interfaces/pytania';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Familiada';
  @HostListener('window:keydown.1')
  p1fclick() {
    this.p1f();
  }
  @HostListener('window:keydown.2')
  p2fclick() {
    this.p2f();
  }
  @HostListener('window:keydown.3')
  p3fclick() {
    this.p3f();
  }
  @HostListener('window:keydown.4')
  p4fclick() {
    this.p4f();
  }
  @HostListener('window:keydown.5')
  p5fclick() {
    this.p5f();
  }
  @HostListener('window:keydown.6')
  p6fclick() {
    this.p6f();
  }
  @HostListener('window:keydown.7')
  p7fclick() {
    this.p7f();
  }
  @HostListener('window:keydown.8')
  p8fclick() {
    this.p8f();
  }
  @HostListener('window:keydown.9')
  p9fclick() {
    this.p9f();
  }

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
    {
      id: 3,
      p1: 'papier ścierny ',
      p2: 'pumeks',
      p3: 'szlifierka',
      p4: 'pilniczek',
      p5: 'gumka ',
      p6: 'szmatka',
      p7: 'mop',
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
