import { Component } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  currentTab$: Observable<string>;

  constructor(private tabSwitchService: TabSwitchService, private processDefinitionService: ProcessDefinitionService) {
    this.currentTab$ = this.tabSwitchService.getCurrentTab();
  }

  onCreateProcessDefinitionButtonClicked(): void {
    this.tabSwitchService.lockCurrentTab();
    this.processDefinitionService.showInputForm();
  }
}
