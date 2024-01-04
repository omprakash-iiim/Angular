import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  postArray : Array<string> = ['Post1', 'Post2', 'Post3'];
  objArray: Array<any> = [
    {id:1, name:"Name1"},
    {id:2, name:"Name2"},
    {id:3, name:"Name3"},
    {id:4, name:"Name4"}
  ]

  addPost(){
    this.objArray.push({id:6, name:"Name6"});
  }

  onDelete(post) {
    let index = this.objArray.indexOf(post);
    this.objArray.splice(index, 1);
  }

  onDeleteUsingIndex(i) {
    this.objArray.splice(i, 1);
  }

}


