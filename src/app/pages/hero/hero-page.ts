import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
  name = signal('ironman');
  age = signal(45);

  getHeroDescription() {
    return `Hero: ${this.name()} - ${this.age()}`;
  }

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
