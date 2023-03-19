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
      p1: 'koszula 6pkt',
      p2: 'zebra 5pkt',
      p3: 'przejście dla pieszych 4pkt',
      p4: 'skarpety 3pkt',
      p5: 'osa 2pkt',
      p6: 'krawat 1pkt',
    },
    {
      id: 2,
      p1: 'pogoda 5pkt',
      p2: 'spodnie 4pkt',
      p3: 'chodzenie do szkoły 3pkt',
      p4: 'koszula 2pkt',
      p5: 'płaszcz 1pkt',
    },
    {
      id: 3,
      p1: 'papier ścierny 7pkt',
      p2: 'pumeks 6pkt',
      p3: 'szlifierka 5pkt',
      p4: 'pilniczek 4pkt',
      p5: 'gumka 3pkt',
      p6: 'szmatka 2pkt',
      p7: 'mop 1pkt',
    },
    {
      id: 4,
      p1: 'sarna 7pkt',
      p2: 'guma 6pkt',
      p3: 'miód 5pkt',
      p4: 'syrop 4pkt',
      p5: 'cukierek 3pkt',
      p6: 'klej 2pkt',
      p7: 'lepik 1pkt',
    },
    {
      id: 5,
      p1: 'żywica 6pkt',
      p2: 'zając 5pkt',
      p3: 'dzik 4pkt',
      p4: 'bocian 3pkt',
      p5: 'czapla 2pkt',
      p6: 'lis 1pkt',
    },
    {
      id: 6,
      p1: 'krem do rąk 5pkt',
      p2: 'pasta do zębów 4pkt',
      p3: 'klej 3pkt',
      p4: 'farba 2pkt',
      p5: 'mleczko np. czekoladowe 1pkt',
    },
    {
      id: 7,
      p1: 'Spider-man 4pkt',
      p2: 'Batman 3pkt',
      p3: 'Superman 2pkt',
      p4: 'Kapitan Ameryka 1pkt',
    },
    {
      id: 8,
      p1: 'pin-pong 5pkt',
      p2: 'siatkówka 4pkt',
      p3: 'tenis ziemny 3pkt',
      p4: 'badminton 2pkt',
      p5: 'szachy 1pkt',
    },
    {
      id: 9,
      p1: 'jogurt 4pkt',
      p2: 'kefir 3pkt',
      p3: 'maślanka 2pkt',
      p4: 'zsiadłe mleko 1pkt',
    },
    {
      id: 10,
      p1: 'storczyk 5pkt',
      p2: 'dracena 4pkt',
      p3: 'paprotka 3pkt',
      p4: 'bluszcz 2pkt',
      p5: 'beniaminek 1pkt',
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
