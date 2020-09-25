import { Injectable } from '@angular/core';
import { ProcessDefinition } from 'src/app/models/process/process-definition';

@Injectable()
export class DefinitionService {

  constructor() { }

  add(processDefinitionArray: Array<ProcessDefinition>, processDefinition: ProcessDefinition): void {
    processDefinitionArray.push(processDefinition);
  }

  sort(processDefinitionArray: Array<ProcessDefinition>, option: string): void {
    processDefinitionArray.sort((a, b) => {
      switch (option) {
        case 'state':
          return (a.state < b.state) ? -1 : (a.state > b.state) ? 1 : 0;

        case 'ID':
          return (a.ID > b.ID) ? -1 : (a.ID > b.ID) ? 1 : 0;

        case 'name':
          return (a.name > b.name) ? -1 : (a.name > b.name) ? 1 : 0;

        case 'organization':
          return (a.organization > b.organization) ? -1 : (a.organization > b.organization) ? 1 : 0;
      }
    });
  }
}
