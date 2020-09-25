import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonClickedNotifierService {

  buttonClicked = new EventEmitter<string>();

  constructor() { }

  onButtonClicked(payload: string): void {
    this.buttonClicked.emit(payload);
  }
}
