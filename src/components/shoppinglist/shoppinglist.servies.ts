import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListServices {
    private ingredient: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomato", 5)
      ];
    startedEditing = new Subject<number>();
  //newIngredient = new EventEmitter<Ingredient>();
    constructor() {
    }

    getIngredient() {
        return this.ingredient;
    }

    getOneIngredient(index: number) {
        return this.ingredient[index];
    }

    addIngredients(ingredient: Ingredient) {
        
       this.ingredient.push({name: ingredient.name, amount: ingredient.amount})
    }
    updateIngredient(index: number, updateIngredient: Ingredient) {
        this.ingredient[index] = {name: updateIngredient.name, amount: updateIngredient.amount}

      }

    deleteIngredient(index: number) {
        this.ingredient.splice(index, 1);
    }
}