import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  currentTab: string;

  constructor(private tabSwitchService: TabSwitchService, private processDefinitionService: ProcessDefinitionService) {
    this.tabSwitchService.currentTab$.subscribe((tab: string) => this.currentTab = tab );
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tabSwitchService.currentTab$.unsubscribe();
  }

  onCreateProcessDefinitionButtonClicked(): void {
    this.tabSwitchService.lockCurrentTab();
    this.processDefinitionService.showInputForm();
  }
}
