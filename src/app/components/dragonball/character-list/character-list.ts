import { Component, input } from '@angular/core';
import { Characters } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {
  characters = input.required<Characters[]>(); //se pone required solo si es necesario que tenga los datos del componente padre si o si
  listName = input.required<string>()
}
