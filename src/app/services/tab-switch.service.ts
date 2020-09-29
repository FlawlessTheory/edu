import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TabSwitchService {
  currentTab$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isLocked$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  switchTab(tab: string): void {
    this.currentTab$.next(tab);
  }

  lockCurrentTab(): void {
    this.isLocked$.next(true);
  }

  unlockCurrentTab(): void {
    this.isLocked$.next(false);
  }
}
