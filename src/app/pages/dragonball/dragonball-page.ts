import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Characters {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [
    /* NgClass */
  ],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPage {
  characters = signal<Characters[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 9000 },
    { id: 4, name: 'Krillin', power: 3000 },
    { id: 5, name: 'Yamcha', power: 500 },
  ]);

 /*  powerClasses = computed(() => {
    return {
      'text-danger':true,
    }
  }); */
}
