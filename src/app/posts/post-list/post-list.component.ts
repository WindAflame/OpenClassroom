import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Post } from '../shared/post.models';
import { PostService } from '../shared/post.services';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

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

  onRemovePost(index: number) { this.postService.removePost(index); }

  ngOnDestroy() { this.postSubscription.unsubscribe(); }
}