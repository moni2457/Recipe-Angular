import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/components/shared/ingredient.model';
import { ShoppingListServices } from '../shoppinglist.servies';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[]
  constructor(private shoppingListServices: ShoppingListServices) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListServices.getIngredient();
  }
  onEditIngredient(index: number) {
    this.shoppingListServices.startedEditing.next(index);
  }

}
