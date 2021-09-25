import { Component } from '@angular/core';




export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Tesla', weight: 'ModelX', symbol: 550},
  {position: 2, name: 'Mercedes', weight: 'C class', symbol: 489},
  {position: 3, name: 'BMW', weight: 'D550', symbol: 491},
  {position: 4, name: 'Audi', weight: 'R8', symbol: 521},
  {position: 5, name: 'Peugeot', weight: '5008', symbol: 264},
  {position: 6, name: 'Renault', weight: 'Torzero', symbol: 541},
  {position: 7, name: 'Volvo', weight: 'XC90', symbol: 220},
  {position: 8, name: 'Dacia', weight: 'StepWay', symbol: 194},
  {position: 9, name: 'Ferrari', weight: 'Forza', symbol: 541},
  {position: 10, name: 'Porsche', weight: 'Cayman', symbol: 501},
];



@Component({
  selector: 'app-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.scss']
})






export class ToptenComponent {
  
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource = ELEMENT_DATA;

}




