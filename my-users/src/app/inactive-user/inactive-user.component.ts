import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {

  users: string[];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  onAddActive(id: number) {
   this.userService.onSetToActive(id);
  }

}
