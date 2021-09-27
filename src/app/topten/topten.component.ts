import { Component } from '@angular/core';
import { toptenmodel } from './interface';





export interface CarElement {
  position: number;
  name: string;
  model: string;
  horsepower: number;
}

const ELEMENT_DATA: CarElement[] = [
  {position: 1, name: 'Tesla', model: 'ModelX', horsepower: 550},
  {position: 2, name: 'Mercedes', model: 'C class', horsepower: 489},
  {position: 3, name: 'BMW', model: 'D550', horsepower: 491},
  {position: 4, name: 'Audi', model: 'R8', horsepower: 521},
  {position: 5, name: 'Peugeot', model: '5008', horsepower: 264},
  {position: 6, name: 'Renault', model: 'Torzero', horsepower: 541},
  {position: 7, name: 'Volvo', model: 'XC90', horsepower: 220},
  {position: 8, name: 'Dacia', model: 'StepWay', horsepower: 194},
  {position: 9, name: 'Ferrari', model: 'Forza', horsepower: 541},
  {position: 10, name: 'Porsche', model: 'Cayman', horsepower: 501},
] as Array<toptenmodel>;



@Component({
  selector: 'app-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.scss']
})






export class ToptenComponent {
  
displayedColumns: string[] = ['position', 'name', 'model', 'horsepower'];
dataSource = ELEMENT_DATA;

}




