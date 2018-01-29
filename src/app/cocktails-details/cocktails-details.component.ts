import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';


@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

  public cocktail = new Cocktail('Mojito',
  'http://static.750g.com/images/600-600/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
  'Ceci est un mojito');

  constructor() { }

  ngOnInit() {
  }

}
