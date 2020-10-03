import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Keypad } from '../../../interfaces/keypad.interface';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  @Input() buttonsKeypad: Keypad[];
  @Output() clickButton = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  action(actionButton: string): void {
    this.clickButton.emit( actionButton );
  }

}
