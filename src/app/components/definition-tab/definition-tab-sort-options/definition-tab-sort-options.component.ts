import { Component, EventEmitter, Output } from '@angular/core';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';

@Component({
  selector: 'app-definition-tab-sort-options',
  templateUrl: './definition-tab-sort-options.component.html',
  styleUrls: ['./definition-tab-sort-options.component.css']
})
export class DefinitionTabSortOptionsComponent {
  constructor(private definitionService: ProcessDefinitionService) { }

  sortTableContents(option: string): void {
    this.definitionService.sortProcessDefinitionArray(option);
  }
}
