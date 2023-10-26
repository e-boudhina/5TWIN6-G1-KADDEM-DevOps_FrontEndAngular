import { Component, OnInit } from '@angular/core';
import {User} from "../../../Models/user.model";
import {UserService} from "../../../Service/user.service";

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadPosts();
  }
  private loadPosts(): void {

    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users); // Log the data inside the subscription callback
    });
  }

  // @ts-ignore
  deleteUser(id: number): any {
    this.userService.deleteUser(id).subscribe(
      (msg) => {
        this.users = this.users.filter(post => post.id !== id);
        console.log(msg.message)
      },
      (error) => {
        console.error('Error deleting post:', error);
        this.users = this.users.filter(user => user.id !== id);
      }
    );
  }


}
