import { Component,OnInit, Output } from '@angular/core';
import {Post} from './Model/post'
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'blogAngular';
   posts: Post[];
   post: Post;
   post1: Post;

   public ngOnInit(){

     this.post = {
       title: "Premier Post",
       content: "dekfnelfn dedejfheflejf klfhlefhezlfhejzf efhezfhezfmezh frzlfhrzlfrzhf",
       loveits: 1,
       dontloveits: 4,
       created_at: "01-02-2017"
     };
     
     this.post1= {
      title: "Second Post",
      content: "nflkefelfjzrlfj frzfjrzfrzjf lfjzrmfjrzfpzrz frzfjrzfmrzjfrz",
      loveits: 1,
      dontloveits: 4,
      created_at: "05-01-2017"
    };
    this.posts = [];
    this.posts.push(this.post,this.post1);
    }


   }


