import { Component } from '@angular/core';
import { ProcessInstance } from 'src/app/models/process/process-instance';
import { ProcessInstanceService } from 'src/app/services/process-instance.service';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { Observable } from 'rxjs';

@Component({
             selector: 'custom-tab',
             templateUrl: './custom-tab.component.html',
             styleUrls: ['./custom-tab.component.css']
           })
export class CustomTabComponent {
  currentTab$: Observable<string>;
  formIsVisible$: Observable<boolean>;
  processInstanceArray$: Observable<ProcessInstance[]>;
  processDefinitionArray$: Observable<ProcessDefinition[]>;

  constructor(private definitionService: ProcessDefinitionService,
              private instanceService: ProcessInstanceService,
              private tabSwitchService: TabSwitchService) {
    this.currentTab$ = this.tabSwitchService.getCurrentTab();

    this.processInstanceArray$ = this.instanceService.get();
    this.formIsVisible$ = this.definitionService.isInputFormOpened();

    this.processDefinitionArray$ = this.definitionService.get();
  }

  addProcessDefinition(processDefinition: ProcessDefinition): void {
    this.processDefinitionArray$ = this.definitionService.add(processDefinition);
  }

  sortProcessDefinitions(option: string): void {
    this.processDefinitionArray$ = this.definitionService.sort(option);
  }
}
