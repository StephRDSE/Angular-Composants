import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.users = this.userService.list;

  }
  clickedUser(u: User) {
    this.userService.selectedUser = u;
  }
}
