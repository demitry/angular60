"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var UserComponent = (function () {
    /**
     *
     */
    function UserComponent() {
        console.log('constructor ran');
        this.name = 'Joe Cocker';
        this.email = 'JoeCocker@gmail.com';
        this.address = {
            street: 'Main street',
            city: 'Boston',
            state: 'MA',
        };
        this.hobbies = ['Music', 'Photography', 'Literature'];
        this.showHobbies = false;
    }
    UserComponent.prototype.toggleHobbies = function () {
        console.log("toggleHobbies");
        this.showHobbies = !this.showHobbies;
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "\n  <h1>Hello {{name}}</h1>\n  <p>email: <strong>{{email}}</strong></p>\n  <p>{{address.street}}, {{address.city}}, {{address.state}}</p>\n\n  <button (click) = \"toggleHobbies()\">{{showHobbies? \"Hide Hobbies\" : \"Show Hobbies\"}} </button>  \n  <div *ngIf=\"showHobbies\">\n    <h3>Hobbies</h3>\n    {{hobbies }}\n\n    <ul>\n    <li *ngFor=\"let hobby of hobbies\">\n      {{hobby}}\n      </li>\n    </ul>\n  </div>\n\n  <form>\n    <label>Name:</label> <br />\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\"><br />\n    \n    <label>E-mail:</label> <br />\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\"><br />\n    \n    <label>Address:</label> <br />\n    \n    <label>Street:</label> <br />\n    <input type=\"text\" [(ngModel)]=\"address.street\" name=\"address.street\"> <br />\n    \n    <label>City:</label> <br />\n    <input type=\"text\" [(ngModel)]=\"address.city\" name=\"address.city\"> <br />\n    \n    <label>State:</label> <br />\n    <input type=\"text\" [(ngModel)]=\"address.state\" name=\"address.state\"> <br />\n    \n    <label>Hobbies:</label> <br />\n    <input type=\"text\" [(ngModel)]=\"hobbies\" name=\"hobbies\"> <br />\n\n  </form>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map