import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputFormService {
  showForm = new EventEmitter<boolean>();

  constructor() { }

  onCreateButtonClicked(): void {
    this.showForm.emit(true);
  }

  onProcessDefinitionCreated(): void {
    this.showForm.emit(false);
  }
}
