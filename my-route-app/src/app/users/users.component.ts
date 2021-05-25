import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: {id: number, name: string}[] = [
    {
      id: 1,
      name: 'Taj'
    },
    {
      id: 2,
      name: 'Mohammad'
    },
    {
      id: 3,
      name: 'Hamza'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
