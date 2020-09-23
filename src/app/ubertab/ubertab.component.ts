import { Component, OnInit } from '@angular/core';
import { TabSwitchComponent } from './tab-switch/tab-switch.component';
import { CustomTabComponent } from './custom-tab/custom-tab.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'ubertab',
  templateUrl: './ubertab.component.html',
  styleUrls: ['./ubertab.component.css']
})
export class UbertabComponent implements OnInit {
  currentTab: string;
  formIsVisible: boolean;

  constructor() { }

  ngOnInit(): void {
    this.formIsVisible = false;
  }

  switchTab(tab: string): void {
    this.currentTab = tab;
  }

  showForm(useless: boolean): void {
    this.formIsVisible = true;
  }

  hideForm(useless: boolean): void {
    this.formIsVisible = false;
  }
}
