import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../Model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post : Post;

  constructor() { }

  ngOnInit() {
  }

  public loveIt(){
    this.post.loveits+=1;
    console.log(this.post.loveits);
  }

  public dontLoveIt(){
    this.post.dontloveits+=1;
    console.log(this.post.dontloveits);

  }
  public setServerityLevel()
  {
    if (this.post.loveits>this.post.dontloveits){
      return('list-group-item list-group-item-action list-group-item-success');
    }
    else {
      return('list-group-item list-group-item-action list-group-item-danger');
    }
    
  }

}
