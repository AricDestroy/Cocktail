import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  constructor() { }

  public ingredients: Ingredient[] = [new Ingredient('lemon', 2)] ;
  ngOnInit() {
  }

}
