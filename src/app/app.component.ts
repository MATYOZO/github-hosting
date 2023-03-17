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
  @HostListener('window:keydown.enter')
  next() {
    this.add();
  }
  @HostListener('window:keydown.backspace')
  backf() {
    this.back();
  }
  @HostListener('window:keydown.z')
  blueteam() {
    this.validblueup();
  }
  @HostListener('window:keydown.x')
  redteam() {
    this.validredup();
  }
  @HostListener('window:keydown.c')
  clearf() {
    this.clear();
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
      p5: 'gumka',
      p6: 'szmatka',
      p7: 'mop',
    },
    {
      id: 4,
      p1: 'sarna',
      p2: 'guma',
      p3: 'miód',
      p4: 'syrop',
      p5: 'cukierek',
      p6: 'klej',
      p7: 'lepik',
    },
    {
      id: 5,
      p1: 'żywica',
      p2: 'zając',
      p3: 'dzik',
      p4: 'bocian',
      p5: 'czapla',
      p6: 'lis',
    },
    {
      id: 6,
      p1: 'krem do rąk',
      p2: 'pasta do zębów',
      p3: 'klej',
      p4: 'farba',
      p5: 'mleczko np. czekoladowe',
    },
    {
      id: 7,
      p1: 'Spider-man',
      p2: 'Batman',
      p3: 'Superman',
      p4: 'Kapitan Ameryka',
    },
    {
      id: 8,
      p1: 'pin-pong',
      p2: 'siatkówka',
      p3: 'tenis ziemny',
      p4: 'badminton',
      p5: 'szachy',
    },
    {
      id: 9,
      p1: 'jogurt',
      p2: 'kefir',
      p3: 'maślanka',
      p4: 'zsiadłe mleko',
    },
    {
      id: 10,
      p1: 'storczyk',
      p2: 'dracena',
      p3: 'paprotka',
      p4: 'bluszcz',
      p5: 'beniaminek ',
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

  validred: number = 0;
  validblue: number = 0;
  clear() {
    this.validblue = 0;
    this.validred = 0;
  }
  validblueup() {
    this.validblue++;
  }
  validredup() {
    console.log('yes');
    this.validred++;
  }
  back() {
    if (this.increase <= 0) {
      alert('Error');
    } else {
      this.p1 = false;
      this.p2 = false;
      this.p3 = false;
      this.p4 = false;
      this.p5 = false;
      this.p6 = false;
      this.p7 = false;
      this.p8 = false;
      this.p9 = false;
      this.increase--;
      this.validblue = 0;
      this.validred = 0;
    }
  }
  add() {
    this.validblue = 0;
    this.increase++;
    this.validred = 0;
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
    this.p1 = !this.p1;
  }
  p2f() {
    this.p2 = !this.p2;
  }
  p3f() {
    this.p3 = !this.p3;
  }
  p4f() {
    this.p4 = !this.p4;
  }
  p5f() {
    this.p5 = !this.p5;
  }
  p6f() {
    this.p6 = !this.p6;
  }
  p7f() {
    this.p7 = !this.p7;
  }
  p8f() {
    this.p8 = !this.p8;
  }
  p9f() {
    this.p9 = !this.p9;
  }
}
