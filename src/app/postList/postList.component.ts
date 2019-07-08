import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.scss']
})
export class PostListComponent {

  @Input() posts : any[];

  constructor() { }

  getColor(parLoveIts : number) : string{
    if(parLoveIts > 0){
      return "green";
    } else if(parLoveIts < 0){
      return "red";
    } else if(parLoveIts == 0){
      return "black";
    }
  }

  onAddLoveIts(index : number){
    this.posts[index].loveIts += 1;
  }

  onDelLoveIts(index : number){
    this.posts[index].loveIts -= 1;
  }

}
