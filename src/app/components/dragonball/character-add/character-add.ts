import { Component, input, signal } from '@angular/core';
import { Characters } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Characters = {
      //id: this.characters().length + 1,
      id: 1000,
      name: this.name(),
      power: this.power(),
    };

    //this.characters.update((list) => [...list, newCharacter]);
    console.log({ newCharacter });
    this.resetField();
  }

  resetField() {
    this.name.set('');
    this.power.set(NaN);
  }
}
