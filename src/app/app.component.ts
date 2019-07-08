import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis fugiat, labore est nesciunt numquam rem sit laudantium id possimus doloribus cumque nulla dolor voluptatem eaque, libero esse ad eligendi!",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis fugiat, labore est nesciunt numquam rem sit laudantium id possimus doloribus cumque nulla dolor voluptatem eaque, libero esse ad eligendi!",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis fugiat, labore est nesciunt numquam rem sit laudantium id possimus doloribus cumque nulla dolor voluptatem eaque, libero esse ad eligendi adipisicing elit. Nobis corporis fugiat, labore est nesciunt numquam rem sit laudantium id possimus doloribus cumque nulla",
      loveIts: 0,
      created_at: new Date()
    }
]

  

  constructor(){}


}
