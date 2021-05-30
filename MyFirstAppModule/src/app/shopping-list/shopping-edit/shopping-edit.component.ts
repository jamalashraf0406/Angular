import {
  Component, OnDestroy, OnInit, ViewChild
} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import * as ShoppingListActions from '../store/shopping-list.action'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService,
              private store: Store<{ shoppingList: { ingredients: Ingredient[]} }>) { }

  ngOnInit(): void {
    this.subscription = this.slService.startEditing
      .subscribe((index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.slService.getIngredient(index);

          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
      });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const nIngredient = new Ingredient(value.name, value.amount);
    if( this.editMode ) {
      //this.slService.updateIngredient(this.editedItemIndex, nIngredient);
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient({
          index: this.editedItemIndex,
          ingredient: nIngredient
        })
      );
    } else {
      //this.slService.addIngredient(nIngredient);
      this.store.dispatch(
        new ShoppingListActions.AddIngredient(nIngredient))
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    //this.slService.onDeleteIngredient(this.editedItemIndex);
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient(this.editedItemIndex)
    );
    this.onClear();
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
