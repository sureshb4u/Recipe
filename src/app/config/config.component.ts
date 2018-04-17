import { Component } from '@angular/core';
import { Config, ConfigService } from './config.service';
import { MessageService } from '../message.service';
import { Recipe } from '../heroes/hero';
import { Ingredient } from '../heroes/ingredient';
import { HeroesService } from '../heroes/heroes.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styles: ['.error {color: red;}']
})
export class ConfigComponent {
  error: any;
  headers: string[];
  config: Config;
  recipe:Recipe;
  recipes:Recipe[];
  ingredient:Ingredient;

  constructor(private heroesService: HeroesService) { }

  addRecipe(recipeObj){
    this.recipe = recipeObj.recipe.value;
    if(recipeObj.ingredient1){
      this.ingredient.name = recipeObj.ingredient1.value;
      this.recipe.incredients.push(this.ingredient)
    }
    if(recipeObj.ingredient2){
      this.ingredient.name = recipeObj.ingredient2.value;
      this.recipe.incredients.push(this.ingredient)
    }if(recipeObj.ingredient3){
      this.ingredient.name = recipeObj.ingredient3.value;
      this.recipe.incredients.push(this.ingredient)
    }if(recipeObj.ingredient4){
      this.ingredient.name = recipeObj.ingredient4.value;
      this.recipe.incredients.push(this.ingredient)
    }
    if(this.recipe && this.recipe.incredients.length != 0){
      this.heroesService.getreceipe()
      .subscribe(recipes => this.recipes.push(recipes)) ;
    }

  }
}
