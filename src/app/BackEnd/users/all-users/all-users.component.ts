import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  content?: string;
  listUsers : any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAllUsers()
      .subscribe(
        data => {
          this.listUsers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
