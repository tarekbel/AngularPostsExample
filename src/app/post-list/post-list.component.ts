import { Component, OnInit,Input } from '@angular/core';
import {PostListItemComponent} from './../post-list-item/post-list-item.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postsChildren : any[];
  date : Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

}
