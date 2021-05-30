import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from "./shopping-list.service";
import {Observable, Subscription} from "rxjs";
import {LoggingService} from "../logging.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService,
              private logService: LoggingService,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit(): void {

    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.slService.getIngredients();
    // this.igChangeSub = this.slService.ingredientChanged
    //   .subscribe((ingredient: Ingredient[]) => {
    //     this.ingredients = ingredient;
    // });

    this.logService.printLog("Hello From ShoppingListComponent!");
  }

  onEditItem(index: number) {
    this.slService.startEditing.next(index);
  }

  ngOnDestroy(): void {
    //this.igChangeSub.unsubscribe();
  }

}
