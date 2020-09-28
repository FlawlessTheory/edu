import { Component, OnInit } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';

@Component({
  selector: 'tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.css']
})
export class TabSwitchComponent implements OnInit {
  isLocked: boolean;

  constructor(private tabSwitchService: TabSwitchService) {
    this.isLocked = false;
    this.tabSwitchService.tabLocked.subscribe((isLocked: boolean) => this.isLocked = isLocked );
  }

  ngOnInit(): void {
  }

  onButtonClicked(tab: string): void {
    this.tabSwitchService.onTabSwitched(tab);
  }
}
