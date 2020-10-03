import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private listMenu: Menu[] = [
    {
      title: 'Resumen',
      icon: 'dashboard',
      path: '/summary'
    },
    {
      title: 'Usuarios',
      icon: 'account_box',
      path: '/users'
    },
    {
      title: 'Médicos',
      icon: 'healing',
      path: '/medics'
    },
    {
      title: 'Pilotos',
      icon: 'local_hospital',
      path: '/drivers'
    }
  ];

  constructor() { }

  getMenu(): Menu[] {
    // Object.assing( [], this.listMenu)
    // El operador es ... es otra forma de hacer una copia de un arreglo
    return [...this.listMenu];
  }
}
