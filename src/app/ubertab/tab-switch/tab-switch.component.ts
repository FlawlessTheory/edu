import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';

@Component({
  selector: 'tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.css']
})
export class TabSwitchComponent implements OnInit, OnDestroy {
  isLocked: boolean;

  constructor(private tabSwitchService: TabSwitchService) {
    this.tabSwitchService.isLocked$.subscribe((isLocked: boolean) => this.isLocked = isLocked );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tabSwitchService.isLocked$.unsubscribe();
  }

  onButtonClicked(tab: string): void {
    this.tabSwitchService.switchTab(tab);
  }
}
