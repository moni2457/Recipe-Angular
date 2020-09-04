import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/components/header/header.component';
import { ShoppinglistComponent } from 'src/components/shoppinglist/shoppinglist/shoppinglist.component';
import { ShoppinglistEditComponent } from 'src/components/shoppinglist/shoppinglist-edit/shoppinglist-edit.component';
import { ReceipesListComponent } from 'src/components/receipes/receipes-list/receipes-list.component';
import { ReceipesDetailComponent } from 'src/components/receipes/receipes-detail/receipes-detail.component';
import { ReceipesComponent } from 'src/components/receipes/receipes/receipes.component';
import { ReceipeItemComponent } from 'src/components/receipes/receipe-item/receipe-item.component';
import { AppHighlightDirective } from 'src/components/shared/directive/app.highlight.directive';
import { DropdownDirective } from 'src/components/shared/directive/dropdown.directive';
import { ShoppingListServices } from 'src/components/shoppinglist/shoppinglist.servies';
import { RecipeStartComponent } from 'src/components/receipes/recipe-start/recipe-start.component';
import { EditReceipesComponent } from 'src/components/receipes/edit-receipes/edit-receipes.component';
import { ReceipesServices } from 'src/components/receipes/receipes.services';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistEditComponent,
    ShoppinglistComponent,
    ReceipesComponent,
    ReceipesDetailComponent,
    ReceipesListComponent,
    ReceipeItemComponent,
    AppHighlightDirective,
    DropdownDirective,
    RecipeStartComponent,
    EditReceipesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListServices, ReceipesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
