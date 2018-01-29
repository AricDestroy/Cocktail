import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail('Mojito',
    'http://static.750g.com/images/600-600/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
    'Ceci est un mojito'),
    new Cocktail('Margarita',
    'https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg',
    'ceci est une margarita'),
    new Cocktail('Sour',
    'https://cdn.liquor.com/wp-content/uploads/2011/07/05125158/fa-Whiskey-Sour.jpg',
    'ceci est un pisco sour'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
