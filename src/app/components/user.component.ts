import { type } from 'os';
import { NgModel } from '@angular/forms/src/directives';
import { Rule } from 'tslint/lib/rules/adjacentOverloadSignaturesRule';
import { Component, Input } from '@angular/core';
import { PostsService } from '../services/posts.service'

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [ PostsService ]
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[]


  constructor(private postsService: PostsService) {
    console.log('constructor ran');
    this.name = 'Joe Cocker';
    this.email = 'JoeCocker@gmail.com';
    this.address = {
      street: 'Main street',
      city: 'Boston',
      state: 'MA',
    }
    this.hobbies = ['Music', 'Photography', 'Literature'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    })
  }

  toggleHobbies() {
    console.log("toggleHobbies")
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
    console.log(hobby);
  }

  deleteHobby(i:number){
    this.hobbies.splice(i);
  }

}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
}