import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TabSwitchService {
  private currentTab$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private isLocked$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getCurrentTab(): Observable<string> {
    return this.currentTab$;
  }

  switchCurrentTab(tab: string): void {
    this.currentTab$.next(tab);
  }

  lockCurrentTab(): void {
    this.isLocked$.next(true);
  }

  isCurrentTabLocked(): Observable<boolean> {
    return this.isLocked$;
  }

  unlockCurrentTab(): void {
    this.isLocked$.next(false);
  }
}
