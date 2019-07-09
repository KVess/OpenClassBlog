import { Component } from '@angular/core';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts : Post [] = [
    new Post("Mon premier post",
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis fugiat, labore est nesciunt numquam rem sit laudantium id possimus doloribus cumque nulla dolor voluptatem eaque, libero esse ad eligendi!"),
    new Post("Mon deuxième post",
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis fugiat, labore est nesciunt numquam rem sit laudantium id possimus doloribus cumque nulla dolor voluptatem eaque, libero esse ad eligendi!"),
    new Post("Encore un post",
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis fugiat, labore est nesciunt numquam rem sit laudantium id possimus doloribus cumque nulla dolor voluptatem eaque, libero esse ad eligendi adipisicing elit. Nobis corporis fugiat, labore est nesciunt numquam rem sit laudantium id possimus doloribus cumque nulla"),
  ];

  constructor(){}


}
