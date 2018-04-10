import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouteModule } from './app-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    PostsModule
  ],
  providers: [
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
