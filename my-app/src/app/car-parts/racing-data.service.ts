import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CarPart } from './car-part';

@Injectable()
export class RacingDataService {  
    constructor(private httpClient: Http){}

    getCarParts(){
        return this.httpClient.get('app/car-parts.json')
            .map(response => <CarPart[]>response.json().data);
    }
}