import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabSwitchService {
  tabSwitched = new EventEmitter<string>();
  tabLocked = new EventEmitter<boolean>();

  constructor() { }

  onTabSwitched(tab: string): void {
    this.tabSwitched.emit(tab);
  }

  lockCurrentTab(): void {
    this.tabLocked.emit(true);
  }

  unlockCurrentTab(): void {
    this.tabLocked.emit(false);
  }
}
