import { Component, Input } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.scss']
})
export class PostListComponent {

  @Input() posts : Post[];

  constructor() { }

}
