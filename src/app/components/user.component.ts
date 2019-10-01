import { Component } from '@angular/core';
import {PostService} from '../services/post.service'

@Component({
  moduleId: module.id,  
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address
  hobbies: string[]
  showHobbies: boolean
  posts: Post[]

  constructor(private postService: PostService) {
    this.name = 'Angular';
    this.email = 'shashidhar.gr@gmail.com';
    this.address = {
      street: 'Haralur road',
      city: 'Bangalore',
      state: 'Karnataka'
    }
    this.hobbies = ['Music', 'Reading', 'Bike riding']
    this.showHobbies = false
    this.postService.getPosts().subscribe(posts => {
        this.posts = posts
    })
 }

 toggleHobbies() {
    this.showHobbies = !this.showHobbies;
 }

 addHobby(hobby: string) {
    this.hobbies.push(hobby)
 }

 deleteHobby(index: number) {
    this.hobbies.splice(index, 1)
 }
}

interface address {
    street: string;
    city: string;
    state: string
}

interface Post {
    id: number
    title: string
    body: string
}
