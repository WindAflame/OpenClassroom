import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  posts = [
    new Post(
      "My first post",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor in tortor lacinia tristique. Aliquam erat volutpat. Aliquam in. ",
      1
    ), new Post(
      "My Second post",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor in tortor lacinia tristique. Aliquam erat volutpat. Aliquam in. ",
      -1
    ), new Post(
      "My Third post",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor in tortor lacinia tristique. Aliquam erat volutpat. Aliquam in. ",
      0
    )
  ]
}
