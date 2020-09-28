import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  currentTab: string;

  @Output()
  createProcessDefinitionButtonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private tabSwitchService: TabSwitchService) { }


  ngOnInit(): void {
  }

  onCreateProcessDefinitionButtonClicked(): void {
    this.createProcessDefinitionButtonClicked.emit(true);
    this.tabSwitchService.lockCurrentTab();
  }
}
