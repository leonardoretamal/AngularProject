import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizeName = () => {
    const name = this.name().toUpperCase();
    return name;
  };

  changeHero() {
    this.name.set('spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
