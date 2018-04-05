import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.models';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../services/post.services';
import { Router } from '@angular/router';
import { RoutePath } from '../routing/path.models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => { this.posts = posts; }
    );
    this.postService.getPosts();
    // Doublon ?
    this.postService.emitPosts();
  }

  onRemovePost(post: Post) { this.postService.removePost(post); }

  ngOnDestroy() { this.postSubscription.unsubscribe(); }
}
