import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../Service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup; // Create a form group for capturing post data

  constructor(private http: HttpClient, private formBuilder: FormBuilder,private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: [''],
      firstname: [''],
      lastname: ['' ],
      email: [''],
      age: [null],
      address: [''],
      phonenumber: ['']
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.userForm.valid) {
      // Prepare the post data object
      const userData = {
        username: this.userForm.value.username,
        firstname: this.userForm.value.firstname,
        lastname: this.userForm.value.lastname,
        email: this.userForm.value.email,
        age: this.userForm.value.age,
        address: this.userForm.value.address,
        phonenumber: this.userForm.value.phonenumber,
      };

      // @ts-ignore
      this.userService.createUser(userData)
        .subscribe(response => {
          console.log('Post created:', response);
          //window.location.reload();
          this.router.navigate(['/user']);
        });
    }
  }

}
