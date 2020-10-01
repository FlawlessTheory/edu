import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';

@Component({
             selector: 'app-definition-tab-table',
             templateUrl: './definition-tab-table.component.html',
             styleUrls: ['./definition-tab-table.component.css']
           })
export class DefinitionTabTableComponent implements OnInit {
  processDefinitionArray$: Observable<ProcessDefinition[]>;

  constructor(private definitionService: ProcessDefinitionService) {}

  public ngOnInit(): void {
    this.processDefinitionArray$ = this.definitionService.getProcessDefinitionArray();
  }
}
