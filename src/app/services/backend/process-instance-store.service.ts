import { Injectable } from '@angular/core';
import { ProcessInstance } from 'src/app/models/process/process-instance';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessInstanceStoreService {

  private processInstanceArray: ProcessInstance[] = [
    new ProcessInstance('не существует', 'null', new Date(2020, 0, 1), 'что это вообще'),
    new ProcessInstance('отсутствует', 'undefined', new Date(2020, 11, 31), 'что это вообще')];

  constructor() { }

  get(): Observable<ProcessInstance[]> {
    return from([this.processInstanceArray]);
  }

  add(processInstance: ProcessInstance): void {
    this.processInstanceArray.push(processInstance);
  }
}
