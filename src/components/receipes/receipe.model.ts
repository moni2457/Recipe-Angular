import { Ingredient } from '../shared/ingredient.model';

export class Receipe {
    public name: string;
    public description: string;
    public imageURL: string
    public ingredient: Ingredient[]

    constructor(name: string, desc: string, image: string, ingredient: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imageURL = image
        this.ingredient = ingredient
    }
}