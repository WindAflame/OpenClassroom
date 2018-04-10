import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { postsRoutes } from './posts/posts.routes';
import { PostListComponent } from './posts/post-list/post-list.component';

export const appRoutes: Routes = [ 
    // Post
    { path: '', children: postsRoutes },
    // Redirect
    { path: '**', component: PostListComponent }
 ]

 @NgModule({
     imports: [ RouterModule.forRoot(appRoutes) ], 
     exports: [ RouterModule ]
 })
 export class AppRouteModule  { }