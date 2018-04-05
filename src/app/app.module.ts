import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Route } from './routing/route.models';

import { PostService } from './services/post.services';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';

import { PostComponent } from './post/post.component';
import { PostItemComponent } from './post/item/post-item.component';
import { PostNewComponent } from './post/new/post-new.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    PostComponent,
    PostItemComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Route)
  ],
  providers: [
    PostService
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
