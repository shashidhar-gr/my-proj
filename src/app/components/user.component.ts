import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}}, {{address.city}}, {{address.state}}</p>
  <button (click)="toggleHobbies()">{{showHobbies ? 'Hide Hobbies' : 'Show Hobbies' }}</button>
  <div *ngIf = "showHobbies">
  <p>Hobbies</p>
  <ul>
    <li *ngFor = "let hobby of hobbies">
        {{hobby}}
    </li>
  </ul>
  </div>
  `,
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address
  hobbies: string[]
  showHobbies: boolean

  constructor() {
    this.name = 'Angular';
    this.email = 'shashidhar.gr@gmail.com';
    this.address = {
      street: 'Haralur road',
      city: 'Bangalore',
      state: 'Karnataka'
    }
    this.hobbies = ['Music', 'Reading', 'Bike riding']
    this.showHobbies = false
 }

 toggleHobbies() {
    this.showHobbies = !this.showHobbies;
 }
}

interface address {
    street: string;
    city: string;
    state: string
}
