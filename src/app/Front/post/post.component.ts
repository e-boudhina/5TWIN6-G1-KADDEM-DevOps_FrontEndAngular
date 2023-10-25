import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.loadPosts();
  }

  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe(
      () => {
        this.posts = this.posts.filter(post => post.id !== id);
      },
      (error) => {
        console.error('Error deleting post:', error);
        this.posts = this.posts.filter(post => post.id !== id);
      }
    );
  }
  private loadPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
