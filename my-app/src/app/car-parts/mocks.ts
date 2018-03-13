import { CarPart } from './car-part'

export const CARPARTS: CarPart[] = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "price": 4.99,
    "inStock": 5,
    "image": "/images/tire.png",
    "featured": false,
    "quantity": 0
  },{
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks made by kryptonite",
    "price": 2.99,
    "inStock": 0,
    "image": "/images/shocks.jpg",
    "featured": true,
    "quantity": 0
  },{
    "id": 3,
    "name": "Sparky Plugs",
    "description": "Extra sparks in dem plugs",
    "price": 5.99,
    "inStock": 7,
    "image": "/images/plugs.jpg",
    "featured": false,
    "quantity": 0
  }];