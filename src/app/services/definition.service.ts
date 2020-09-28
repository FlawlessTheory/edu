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
      const comparator = (firstString: string, secondString: string) => {
        return firstString.localeCompare(secondString);
      };

      switch (option) {
        case 'state':
          return comparator(a.state, b.state);

        case 'ID':
          return comparator(a.ID, b.ID);

        case 'name':
          return comparator(a.name, b.name);

        case 'organization':
          return comparator(a.organization, b.organization);
      }
    });
  }
}
