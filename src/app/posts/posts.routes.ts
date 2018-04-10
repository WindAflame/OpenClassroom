import { Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostNewComponent } from './post-new/post-new.component';

import { postsListUrl, postsNewUrl } from './shared/post.url';

export const postsRoutes: Routes = [
    { path: '', redirectTo: postsListUrl, pathMatch: 'full' },
    // List
    { path: postsListUrl, component: PostListComponent },
    // New
    { path: postsNewUrl, component: PostNewComponent }
 ]