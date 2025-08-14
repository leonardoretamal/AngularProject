import { effect, Injectable, signal } from '@angular/core';
import { Characters } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Characters[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
};

@Injectable({
  providedIn: 'root',
}) //al ser root queda global.
export class DragonballService {
  //seria el get
  characters = signal<Characters[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  //seria el post
  addCharacter(character: Characters) {
    this.characters.update((list) => [...list, character]);
  }
}
