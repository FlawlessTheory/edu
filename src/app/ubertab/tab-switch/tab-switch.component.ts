import { Component, OnInit } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';

@Component({
  selector: 'tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.css']
})
export class TabSwitchComponent implements OnInit {

  constructor(private tabSwitchService: TabSwitchService) { }

  ngOnInit(): void {
  }

  onButtonClicked(tab: string): void {
    this.tabSwitchService.onTabSwitched(tab);
  }
}
