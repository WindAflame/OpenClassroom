import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostNewComponent } from './post-new/post-new.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { PostService } from './shared/post.services';

@NgModule({
  declarations: [
      PostListComponent,
      PostNewComponent,
      PostListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: []
})
export class PostsModule { }
