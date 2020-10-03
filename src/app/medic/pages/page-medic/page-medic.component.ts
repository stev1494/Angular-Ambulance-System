import { Component, OnInit } from '@angular/core';
import { Keypad } from '../../../interfaces/keypad.interface';

@Component({
  selector: 'app-page-medic',
  templateUrl: './page-medic.component.html',
  styleUrls: ['./page-medic.component.css']
})
export class PageMedicComponent implements OnInit {

  listKeyPad: Keypad[] = [
    {
    icon: 'add',
    action: 'ADD',
    tooltip: 'Agregar Médico'

   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  action( actionButton: string): void {
    switch ( actionButton ){
      case 'ADD':
        break;
    }
  }

}
