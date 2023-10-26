import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../Service/user.service";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../../Service/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.updateForm = this.formBuilder.group({
      username: [''],
      firstname: [''],
      lastname: [''],
      email: [''],
      age: [null],
      address: [''],
      phonenumber: ['']
    });

    // Fetch user data from the backend and set form values
    this.fetchUserData();
  }

  fetchUserData() {
    this.userService.getUserById(55).subscribe(
      (user) => {
        // Set the form values with the fetched user data
        this.updateForm.patchValue({
          id: user.id,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          age: user.age,
          address: user.address,
          phonenumber: user.phonenumber
        });
      },
      (error) => {
        console.error('Failed to fetch user data:', error);
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.updateForm.valid) {
      // Prepare the post data object
      const updatedUserData = {
        username: this.updateForm.value.username,
        firstname: this.updateForm.value.firstname,
        lastname: this.updateForm.value.lastname,
        email: this.updateForm.value.email,
        age: this.updateForm.value.age,
        address: this.updateForm.value.address,
        phonenumber: this.updateForm.value.phonenumber,
      };

      this.userService.createUser(this.updateForm.value.id, updatedUserData)
        .subscribe(response => {
          console.log('Post created:', response);
          //window.location.reload();
          this.router.navigate(['/user']);
        });
    }
  }
}
