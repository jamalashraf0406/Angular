import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./auth.service";
import {AuthGaurd} from "./auth-gaurd.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from './error-page/error-page.component';
import {ServerResolver} from "./servers/server/server-resolver.service";
import {ServersService} from "./servers/servers.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFountComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ServersService,
    AuthService,
    AuthGaurd,
    CanDeactivateGuard,
    ServerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
