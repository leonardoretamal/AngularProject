import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Characters } from '../../interfaces/character.interface';

@Component({
  imports: [CharacterList],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
  selector: 'dragonball-super',
})
export class DragonballSuperPage {
  name = signal('');
  power = signal(0);

  characters = signal<Characters[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
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
}
