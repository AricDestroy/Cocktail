import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Ingredient } from '../models/ingredient.model';


@Injectable()
export class CocktailService {

  constructor() { }

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    new Cocktail('Mojito',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mojito_01.jpg/800px-Mojito_01.jpg',
    'Ceci est un mojito',
    [
      new Ingredient('perrier', 1),
      new Ingredient('citron', 1),
      new Ingredient('menthe', 2),
      new Ingredient('rhum', 20)
    ]),
    new Cocktail('Margarita',
    'https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg',
    'ceci est une margarita',
    [
      new Ingredient('tequila', 8),
      new Ingredient('citron', 4),
      new Ingredient('sel', 4)
    ]),
    new Cocktail('Sour',
    'https://cdn.liquor.com/wp-content/uploads/2011/07/05125158/fa-Whiskey-Sour.jpg',
    'ceci est un pisco sour',
    [
      new Ingredient('pisco', 5),
      new Ingredient('orange', 3),
      new Ingredient('citron', 3)
    ]),
  ]);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  selectCocktail(index: number): void {
    this.cocktail.next(this.cocktails.value[index]);
  }
}


