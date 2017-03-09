import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <p>email: <strong>{{email}}</strong></p>
  <p>{{address.street}}, {{address.city}}, {{address.state}}</p>
  `,
})

export class AppComponent  
{
   name = 'Dmitry Poluektov';
   email = 'dpoluektov@gmail.com';
   address = {
     street: 'Main street',
     city: 'Boston',
     state: 'MA'
   } 
}
