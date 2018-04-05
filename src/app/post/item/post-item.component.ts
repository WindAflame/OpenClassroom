import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.models';
import { PostService } from '../../services/post.services';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
  }
  
  onIncLikeIts(){ this.post.loveIts ++; this.postService.updatePosts(); }
  onDecLikeIts(){ this.post.loveIts --; this.postService.updatePosts(); }
  onDelete(){ this.postService.removePost(this.post); }

}
