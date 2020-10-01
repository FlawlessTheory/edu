import { Component } from '@angular/core';
import { TabService } from 'src/app/services/tab.service';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  currentTab$: Observable<string>;

  constructor(private tabSwitchService: TabService, private processDefinitionService: ProcessDefinitionService) {
    this.currentTab$ = this.tabSwitchService.getCurrentTab();
  }

  onCreateProcessDefinitionButtonClicked(): void {
    this.tabSwitchService.lockCurrentTab();
    this.processDefinitionService.showInputForm();
  }
}
