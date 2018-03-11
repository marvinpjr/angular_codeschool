import {Component} from '@angular/core';

@Component({
    selector: 'car-parts',
    templateUrl: './car-parts.component.html',
    styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent {
    carParts = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "price": 4.99,
        "inStock": 5
      },{
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks made by kryptonite",
        "price": 2.99,
        "inStock": 0
      },{
        "id": 3,
        "name": "Sparky Plugs",
        "description": "Extra sparks in dem plugs",
        "price": 5.99,
        "inStock": 7
      }];
    
      totalCarParts(){ 
        let sum = 0;
        for (let carPart of this.carParts){
          sum += carPart.inStock;
        }
        return sum;
      }
}