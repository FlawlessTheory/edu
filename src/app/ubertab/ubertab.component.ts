import { Component, OnInit } from '@angular/core';
import { TabSwitchComponent } from './tab-switch/tab-switch.component';
import {CustomTabComponent} from './custom-tab/custom-tab.component';

@Component({
  selector: 'ubertab',
  templateUrl: './ubertab.component.html',
  styleUrls: ['./ubertab.component.css']
})
export class UbertabComponent implements OnInit {
  currentTab: string;

  constructor() { }

  ngOnInit(): void {
  }
  switchTab(tab: string): void {
    this.currentTab = tab;
  }
}
