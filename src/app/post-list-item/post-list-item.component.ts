import { Component, Input } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {


  @Input() post : Post;

  constructor() { }

  onAddLoveIts(){
    this.post.loveIts += 1;
  }

  onDelLoveIts(){
    this.post.loveIts -= 1;
  }

}
