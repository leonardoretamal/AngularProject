import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Characters } from '../../interfaces/character.interface';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball';

@Component({
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
  selector: 'dragonball-super',
})
export class DragonballSuperPage {
  /* constructor(
    public dragonBallService: DragonballService
  ) {} inyeccion tradicional */

  public dragonBallService = inject(DragonballService);

}
