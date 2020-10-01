import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TabService {
  private isLocked$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  lockCurrentTab(): void {
    this.isLocked$.next(true);
  }

  isCurrentTabLocked(): BehaviorSubject<boolean> {
    return this.isLocked$;
  }

  unlockCurrentTab(): void {
    this.isLocked$.next(false);
  }
}
