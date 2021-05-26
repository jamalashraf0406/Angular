import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivate: boolean = false;
  private activeSub: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.activeSub = this.userService.activatedSubject
      .subscribe((data: boolean) => {
        this.userActivate = data;
      });
  }

  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
  }
}
