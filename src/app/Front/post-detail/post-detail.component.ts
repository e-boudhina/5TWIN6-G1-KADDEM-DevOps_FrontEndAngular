import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/Service/post.service';
import { User } from 'src/app/Models/user.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  users: any[]; // Store the list of users here
  postForm: FormGroup; // Create a form group for capturing post data

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private postService: PostService, private router: Router,private location: Location) {}

  ngOnInit() {
    // Fetch the list of users from the API gateway
    this.http.get('http://localhost:8090/POST-SERVICE/post/getAllUsers')
    .subscribe((data: any) => { 
   
      const usersData = data.map((user: User) => {
        return { id: user.id, username: user.username };
      });
  
      this.users = usersData;
    });
  
    this.postForm = this.formBuilder.group({
      title: '',
      content: '',
      image: '',
      userId: null // Add a control for selecting the user
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.postForm.valid) {
      // Prepare the post data object
      const postData = {
        title: this.postForm.value.title,
        content: this.postForm.value.content,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt0K96mnZ5C7PyvaUDLapk4JRD_oXcxaZfta88sJkxA&s',
        user_id: this.postForm.value.userId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString() 
      };

      this.postService.createPost(postData)
        .subscribe(response => {
          console.log('Post created:', response);
          window.location.reload();
          //this.router.navigate(['/post']);
        });
    }
  }
}
