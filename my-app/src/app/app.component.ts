import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';
  carParts = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5
  },{
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks made by kryptonite",
    "inStock": 0
  },{
    "id": 3,
    "name": "Sparky Plugs",
    "description": "Extra sparks in dem plugs",
    "inStock": 7
  }];
}
