import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessInstance } from 'src/app/models/process/process-instance';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { DefinitionService } from 'src/app/services/definition.service';

@Component({
  selector: 'custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css'],
  providers: [DefinitionService]
})
export class CustomTabComponent implements OnInit {
  @Input()
  currentTab: string;

  @Input()
  formIsVisible: boolean;

  @Output()
  processDefinitionAdded: EventEmitter<boolean> = new EventEmitter<boolean>();

  processInstanceArray: Array<ProcessInstance>;
  processDefinitionArray: Array<ProcessDefinition>;

  constructor(private definitionService: DefinitionService) { }

  ngOnInit(): void {
    this.processInstanceArray = new Array<ProcessInstance>(new ProcessInstance('не существует', 'null', new Date(2020, 0, 1), 'что это вообще'), new ProcessInstance('отсутствует', 'undefined', new Date(2020, 11, 31), 'что это вообще'));
    this.processDefinitionArray = new Array<ProcessDefinition>(new ProcessDefinition('существует в воображении', 'N0TH1NG', '?', 1, 'ООО "Рога и Копыта"'), new ProcessDefinition('придумал', 'V01D', '!', 9, 'ОАО "Вектор"'));
  }

  onNewProcessDefinition(processDefinition: ProcessDefinition): void {
    this.definitionService.add(this.processDefinitionArray, processDefinition);
    this.processDefinitionAdded.emit(true);
  }

  sortProcessDefinitions(option: string): void {
    this.definitionService.sort(this.processDefinitionArray, option);
  }
}
