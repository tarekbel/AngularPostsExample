import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
