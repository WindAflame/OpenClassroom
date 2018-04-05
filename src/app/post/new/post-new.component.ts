import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../services/post.services';
import { Router } from '@angular/router';
import { RoutePath } from '../../routing/path.models';
import { Post } from '../../models/post.models';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: [ '', [Validators.required] ],
      content: [ '', [Validators.required] ]
    })
  }

  onSavePost() {
    const newPost = new Post(
      this.postForm.get('title').value,
      this.postForm.get('content').value,
      0,
      new Date().getTime()
    );
    this.postService.createPost(newPost);
    this.router.navigate( [RoutePath.POSTS] );
  }

}
