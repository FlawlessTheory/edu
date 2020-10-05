import { Injectable } from '@angular/core';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { from, Observable } from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class ProcessDefinitionStoreService {

  private processDefinitionArray: ProcessDefinition[] = [
    new ProcessDefinition('существует в воображении', 'N0TH1NG', '?', 1, 'ООО "Рога и Копыта"'),
    new ProcessDefinition('придумал', 'V01D', '!', 9, 'ОАО "Вектор"')];

  constructor() {
  }

  get(): Observable<ProcessDefinition[]> {
    return from([this.processDefinitionArray]);
  }

  add(processDefinition: ProcessDefinition): void {
    this.processDefinitionArray.push(processDefinition);
  }

  sort(option: string): void {
    const comparator = (firstString: string, secondString: string) => {
      return firstString.localeCompare(secondString);
    };

    this.processDefinitionArray.sort((a, b) => {
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
