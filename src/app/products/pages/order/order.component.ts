import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  sortBy: keyof Hero | '' = '';

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Green lantern',
      canFly: true,
      color: Color.green,
    },
  ];

  changeOrder(value: keyof Hero | '') {
    this.sortBy = value;
  }
}
