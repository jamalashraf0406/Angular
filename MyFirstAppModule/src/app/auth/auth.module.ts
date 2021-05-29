import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {AuthComponent} from "./auth.component";

const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  providers: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes),
    SharedModule
  ]
})
export class AuthModule{}
