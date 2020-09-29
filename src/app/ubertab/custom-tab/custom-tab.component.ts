import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProcessInstance } from 'src/app/models/process/process-instance';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { Observable } from 'rxjs';
import { ProcessInstanceService } from 'src/app/services/process-instance.service';

@Component({
  selector: 'custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css']
})
export class CustomTabComponent implements OnInit, OnDestroy {
  currentTab: string;
  formIsVisible: boolean;
  processInstanceArray: Observable<ProcessInstance[]>;
  processDefinitionArray: Observable<ProcessDefinition[]>;

  constructor(private definitionService: ProcessDefinitionService,
              private instanceService: ProcessInstanceService,
              private tabSwitchService: TabSwitchService) {
    this.tabSwitchService.currentTab$.subscribe((tab: string) => this.currentTab = tab);

    this.processInstanceArray = this.instanceService.get();
    this.definitionService.inputFormOpened$.subscribe((val: boolean) => this.formIsVisible = val);

    this.processDefinitionArray = this.definitionService.get();
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.tabSwitchService.currentTab$.unsubscribe();
    this.definitionService.inputFormOpened$.unsubscribe();
  }

  addProcessDefinition(processDefinition: ProcessDefinition): void {
    this.processDefinitionArray = this.definitionService.add(processDefinition);
  }

  sortProcessDefinitions(option: string): void {
    this.processDefinitionArray = this.definitionService.sort(option);
  }
}
