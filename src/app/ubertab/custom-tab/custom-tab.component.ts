import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessInstance } from 'src/app/models/process/process-instance';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { DefinitionService } from 'src/app/services/definition.service';
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { InputFormService } from 'src/app/services/input-form.service';

@Component({
  selector: 'custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css'],
  providers: [DefinitionService]
})
export class CustomTabComponent implements OnInit {
  currentTab: string;
  formIsVisible: boolean;
  processInstanceArray: Array<ProcessInstance>;
  processDefinitionArray: Array<ProcessDefinition>;

  constructor(private definitionService: DefinitionService,
              private tabSwitchService: TabSwitchService,
              private inputFormService: InputFormService) {
    this.tabSwitchService.tabSwitched.subscribe((tab: string) => this.currentTab = tab );
    this.inputFormService.showForm.subscribe((show: boolean) => this.formIsVisible = show );
  }

  ngOnInit(): void {
    this.processInstanceArray = new Array<ProcessInstance>(new ProcessInstance('не существует', 'null', new Date(2020, 0, 1), 'что это вообще'), new ProcessInstance('отсутствует', 'undefined', new Date(2020, 11, 31), 'что это вообще'));
    this.processDefinitionArray = new Array<ProcessDefinition>(new ProcessDefinition('существует в воображении', 'N0TH1NG', '?', 1, 'ООО "Рога и Копыта"'), new ProcessDefinition('придумал', 'V01D', '!', 9, 'ОАО "Вектор"'));
  }

  onNewProcessDefinition(processDefinition: ProcessDefinition): void {
    this.definitionService.add(this.processDefinitionArray, processDefinition);
    this.inputFormService.onProcessDefinitionCreated();
  }

  sortProcessDefinitions(option: string): void {
    this.definitionService.sort(this.processDefinitionArray, option);
  }
}
