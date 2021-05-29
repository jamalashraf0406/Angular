import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

const shoppingAppRoute: Routes = [
  {
    path: '',
    component: ShoppingListComponent
  }
];

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(shoppingAppRoute),
    SharedModule
  ]
})
export class ShoppingListModule {
}
