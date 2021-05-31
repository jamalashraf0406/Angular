import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {JavaComponent} from "./java/java.component";
import {SpringComponent} from "./spring/spring.component";
import {SpringBootComponent} from "./spring-boot/spring-boot.component";
import {HibernateComponent} from "./hibernate/hibernate.component";
import {InterviewQuesComponent} from "./interview-ques/interview-ques.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'java-tutorials',
    component: JavaComponent
  },
  {
    path: 'spring-tutorials',
    component: SpringComponent
  },
  {
    path: 'spring-boot-tutorials',
    component: SpringBootComponent
  },
  {
    path: 'hibernate-tutorials',
    component: HibernateComponent
  },
  {
    path: 'interviews-ques',
    component: InterviewQuesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
