import { RoutePath as RP } from "./path.models";
import { PostComponent } from "../post/post.component";
import { PostNewComponent } from "../post/new/post-new.component";

export const Route = [ 
    // Post
    { path: RP.POSTS, component: PostComponent },
    { path: RP.NEW, component: PostNewComponent },
    // Redirect
    { path: '**', redirectTo: RP.POSTS }
 ]