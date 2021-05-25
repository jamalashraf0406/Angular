import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Simply test recipe",
      "https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),

    new Recipe("Another Recipe", "Simply test recipe",
      "https://ca-times.brightspotcdn.com/dims4/default/78f26f2/2147483647/strip/true/crop/4032x2688+0+168/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffc%2Ffe%2Fee3e952643658869005722ed0dd7%2Fla-photos-1staff-693155-la-fo-oven-baked-nachos.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),

    new Recipe("Chicken Recipe", "Simply test recipe",
      "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/recipes/tangy_skillet_chicken_recipe/650x350_tangy_skillet_chicken_recipe.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('Check fry', 20)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
  }
}
