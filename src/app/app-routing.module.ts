import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipesComponent } from 'src/components/receipes/receipes/receipes.component';
import { ShoppinglistComponent } from 'src/components/shoppinglist/shoppinglist/shoppinglist.component';
import { ReceipesDetailComponent } from 'src/components/receipes/receipes-detail/receipes-detail.component';
import { RecipeStartComponent } from 'src/components/receipes/recipe-start/recipe-start.component';
import { EditReceipesComponent } from 'src/components/receipes/edit-receipes/edit-receipes.component';

const appRoutes: Routes = [
    {path: '', redirectTo:'/recipe', pathMatch: 'full'},
    {path: 'recipe', component: ReceipesComponent, children:[
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: EditReceipesComponent},
      {path: ':id', component: ReceipesDetailComponent},
      {path: ':id/edit', component: EditReceipesComponent}
    ]},
    {path: 'shoppinglist', component: ShoppinglistComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
