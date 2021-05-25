import {Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {

  users: string[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users =  this.userService.activeUsers;
  }

  onAddInactive(id: number) {
    this.userService.onSetToInactive(id);
  }

}
