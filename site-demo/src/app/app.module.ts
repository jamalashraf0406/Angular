import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { SpringComponent } from './spring/spring.component';
import { HibernateComponent } from './hibernate/hibernate.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CoreModule} from "./core.module";
import {AppRoutingModule} from "./app-routing.module";
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { InterviewQuesComponent } from './interview-ques/interview-ques.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JavaComponent,
    SpringComponent,
    HibernateComponent,
    HeaderComponent,
    FooterComponent,
    SpringBootComponent,
    InterviewQuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
