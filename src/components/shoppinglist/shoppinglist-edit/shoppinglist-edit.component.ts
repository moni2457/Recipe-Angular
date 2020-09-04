import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { ShoppingListServices } from '../shoppinglist.servies';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/components/shared/ingredient.model';


@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
subscription: Subscription
editMode = false;
editItemIndex: number;
editItem: Ingredient
  constructor(private shoppingListServices: ShoppingListServices) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListServices.startedEditing.subscribe(
      (index: number) =>{
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListServices.getOneIngredient(this.editItemIndex)
        this.slForm.setValue( {
          'name': this.editItem.name,
          'amount': this.editItem.amount
        })
      }
    )
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    if(this.editMode) {
      this.shoppingListServices.updateIngredient(this.editItemIndex, {name:value.name, amount:value.amount} )
    } else {
      this.editMode = false;
      this.shoppingListServices.addIngredients({name:value.name, amount:value.amount});
    }
    form.reset();
  }

  deleteItem() {
    this.shoppingListServices.deleteIngredient(this.editItemIndex);
    this.clear();
  }

  clear() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
