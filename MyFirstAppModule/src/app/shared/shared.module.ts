import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert/alert.component";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {PlaceholderDirective} from "./placeholder/placeholder.directive";
import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";

const component = [
  AlertComponent,
  LoadingSpinnerComponent,
  PlaceholderDirective,
  DropdownDirective
];

@NgModule({
  declarations: [
    ...component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...component,
    CommonModule
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule {}
