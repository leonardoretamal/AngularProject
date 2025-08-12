import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Characters } from '../../interfaces/character.interface';

@Component({
  imports: [
    /* NgClass */
  ],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
  selector: 'dragonball',
})
export class DragonballPage {
  name = signal('');
  power = signal(0);

  characters = signal<Characters[]>([
    { id: 1, name: 'Goku', power: 9001 },
    /* { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 9000 },
    { id: 4, name: 'Krillin', power: 3000 },
    { id: 5, name: 'Yamcha', power: 500 }, */
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Characters = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetField();
  }

  resetField() {
    this.name.set('');
    this.power.set(NaN);
  }

  /*  powerClasses = computed(() => {
    return {
      'text-danger':true,
    }
  }); */
}
