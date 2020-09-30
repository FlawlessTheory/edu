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
}
