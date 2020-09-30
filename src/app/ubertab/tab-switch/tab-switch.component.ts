import { Component } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { Observable } from 'rxjs';

@Component({
             selector: 'tab-switch',
             templateUrl: './tab-switch.component.html',
             styleUrls: ['./tab-switch.component.css']
           })
export class TabSwitchComponent {
  readonly isLocked$: Observable<boolean>;

  constructor(private tabSwitchService: TabSwitchService) {
    this.isLocked$ = this.tabSwitchService.isCurrentTabLocked();
  }

  onButtonClicked(tab: string): void {
    this.tabSwitchService.switchCurrentTab(tab);
  }
}
