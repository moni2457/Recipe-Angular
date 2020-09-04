import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ReceipesServices } from '../receipes.services';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-edit-receipes',
  templateUrl: './edit-receipes.component.html',
  styleUrls: ['./edit-receipes.component.css']
})
export class EditReceipesComponent implements OnInit {
  id: number
  editMode = false;
  recipeForm: FormGroup
  constructor(private router: ActivatedRoute,
    private receipesServices: ReceipesServices,
    private fb: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null
      this.inintForm();
    })
  }

  private inintForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = this.fb.array([]);


    if (this.editMode) {
      const recipe: Receipe = this.receipesServices.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imageURL;
      recipeDescription = recipe.description;
      if (recipe['ingredient']) {
        for (let ingredient of recipe.ingredient) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }

    this.recipeForm = this.fb.group({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  get recipeFormData() {
    return this.recipeForm.get('ingredients');
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  onSubmit() {
    const newRecipe = new Receipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.receipesServices.updateRecipe(this.id, newRecipe)
    } else {
      this.receipesServices.addRecipe(newRecipe)
    }
    this.recipeForm.reset();
    this.onCancel();
  }

  onCancel(){
    this.route.navigate(['../'], {relativeTo: this.router})
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  
}
