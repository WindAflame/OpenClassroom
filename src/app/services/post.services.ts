import { Post } from "../models/post.models";
import { Subject } from "rxjs/Subject";
import { HttpClient } from "selenium-webdriver/http";
import { RoutePath } from "../routing/path.models";
import { resolve } from "url";
import { reject } from "q";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class PostService {

    posts: Post[] = [];
    postSubject = new Subject<Post[]>();
    firebaseStorageRef = firebase.database().ref(RoutePath.POSTS);

    constructor() {}

    emitPosts() { this.postSubject.next(this.posts.slice()); }
    savePostsToFirebase() { this.firebaseStorageRef.set(this.posts); }
    getPosts() { 
        this.firebaseStorageRef.on('value',
                (data) => {
                    this.posts = data.val() ? data.val() : [];
                    this.emitPosts();
                }
            )
    }
    updatePosts(){
        this.savePostsToFirebase();
        this.emitPosts();
    }
    createPost(post: Post) {
        this.posts.push(post);
        this.updatePosts();
    }
    removePost(post: Post) {
        const index = this.posts.findIndex(
            (item) => { return (item === post); }
        )
        this.posts.splice(index, 1);
        this.updatePosts();
    }

}