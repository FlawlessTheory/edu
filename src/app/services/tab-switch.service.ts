import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabSwitchService {
  tabSwitched = new EventEmitter<string>();

  constructor() { }

  onTabSwitched(tab: string): void {
    this.tabSwitched.emit(tab);
  }
}
