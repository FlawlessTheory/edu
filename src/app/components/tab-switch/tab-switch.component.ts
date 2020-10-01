import { Component } from '@angular/core';
import { TabService } from 'src/app/services/tab.service';
import { BehaviorSubject } from 'rxjs';

@Component({
             selector: 'tab-switch',
             templateUrl: './tab-switch.component.html',
             styleUrls: ['./tab-switch.component.css']
           })
export class TabSwitchComponent {
  readonly isLocked$: BehaviorSubject<boolean>;

  constructor(private tabSwitchService: TabService) {
    this.isLocked$ = this.tabSwitchService.isCurrentTabLocked();
  }
}
