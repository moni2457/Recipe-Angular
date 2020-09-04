import { Component, OnInit, OnDestroy } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipesServices } from '../receipes.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']  
})
export class ReceipesListComponent implements OnInit, OnDestroy {
  receipes : Receipe[] 
  subscription: Subscription

  constructor(private receipesServices: ReceipesServices, private router: Router, 
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.subscription = this.receipesServices.recipeChanged.subscribe((recipes: Receipe[])=>{
      this.receipes = recipes;
    })
    this.receipes = this.receipesServices.getRecipes();
  }
  newRecipe() {
    this.router.navigate(['new'], {relativeTo:  this.route})
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
