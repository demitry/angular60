import { type } from 'os';
import { NgModel } from '@angular/forms/src/directives';
import { Rule } from 'tslint/lib/rules/adjacentOverloadSignaturesRule';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>email: <strong>{{email}}</strong></p>
  <p>{{address.street}}, {{address.city}}, {{address.state}}</p>

  <button (click) = "toggleHobbies()">{{showHobbies? "Hide Hobbies" : "Show Hobbies"}} </button>  
  <div *ngIf="showHobbies">
    <h3>Hobbies</h3>
    {{hobbies }}

    <ul>
    <li *ngFor="let hobby of hobbies">
      {{hobby}}
      </li>
    </ul>
  </div>

  <form>
    <label>Name:</label> <br />
    <input type="text" [(ngModel)]="name" name="name"><br />
    
    <label>E-mail:</label> <br />
    <input type="email" [(ngModel)]="email" name="email"><br />
    
    <label>Address:</label> <br />
    
    <label>Street:</label> <br />
    <input type="text" [(ngModel)]="address.street" name="address.street"> <br />
    
    <label>City:</label> <br />
    <input type="text" [(ngModel)]="address.city" name="address.city"> <br />
    
    <label>State:</label> <br />
    <input type="text" [(ngModel)]="address.state" name="address.state"> <br />
    
    <label>Hobbies:</label> <br />
    <input type="text" [(ngModel)]="hobbies" name="hobbies"> <br />

  </form>
  `,
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  /**
   *
   */
  constructor() {
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
  }

  toggleHobbies() {
    console.log("toggleHobbies")
    this.showHobbies = !this.showHobbies;
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}