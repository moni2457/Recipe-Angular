import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ShoppingListServices } from 'src/components/shoppinglist/shoppinglist.servies';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReceipesServices } from '../receipes.services';

@Component({
  selector: 'app-receipes-detail',
  templateUrl: './receipes-detail.component.html',
  styleUrls: ['./receipes-detail.component.css']
})
export class ReceipesDetailComponent implements OnInit {
 currentRecipe: Receipe;
 id: number;

  constructor(private shoppingListServices: ShoppingListServices, 
    private receipesServices: ReceipesServices,
    private route: Router, private router: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.id = +params['id']
      this.currentRecipe = this.receipesServices.getRecipe(this.id);
    })
  }
  
  addToCart() {
   this.currentRecipe.ingredient.map((ingredient)=>{
    this.shoppingListServices.addIngredients({name: ingredient.name, amount: ingredient.amount})
    this.route.navigate(['/shoppinglist']);
   })
  }
  editRecipe() {
    this.route.navigate(['../',this.id,'edit'], {relativeTo: this.router});
  }

  deleteRecipe() {
    this.receipesServices.deleteRecipe(this.id);
    this.route.navigate(["/recipe"])
  }
}
