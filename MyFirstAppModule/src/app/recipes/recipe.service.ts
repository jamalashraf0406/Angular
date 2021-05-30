import {Injectable, OnInit} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import * as ShoppingListActions from "../shopping-list/store/shopping-list.action";

@Injectable()
export class RecipeService implements OnInit{

  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe("A Test Recipe", "Simply test recipe",
  //     "https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg",
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]),
  //
  //   new Recipe("Another Recipe", "Simply test recipe",
  //     "https://ca-times.brightspotcdn.com/dims4/default/78f26f2/2147483647/strip/true/crop/4032x2688+0+168/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffc%2Ffe%2Fee3e952643658869005722ed0dd7%2Fla-photos-1staff-693155-la-fo-oven-baked-nachos.jpg",
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]),
  //
  //   new Recipe("Chicken Recipe", "Simply test recipe",
  //     "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/recipes/tangy_skillet_chicken_recipe/650x350_tangy_skillet_chicken_recipe.jpg",
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('Check fry', 20)
  //     ]),
  //   new Recipe("Chicken Recipe", "Simply test recipe",
  //     "https://cdn.shopify.com/s/files/1/1717/1391/articles/Huli_Huli_Chicken_1112x.jpg?v=1486952708",
  // [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('Check fry', 20)
  //   ])
  // ];

  recipes: Recipe[] = []

  constructor(private slService: ShoppingListService,
              private store: Store<{shoppingList: { ingredients: Ingredient[]}}>) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) : Recipe {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      //this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, nRecipe: Recipe) {
    this.recipes[index] = nRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  ngOnInit(): void {

  }
}
