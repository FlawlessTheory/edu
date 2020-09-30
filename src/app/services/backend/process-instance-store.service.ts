import { Injectable } from '@angular/core';
import { ProcessInstance } from 'src/app/models/process/process-instance';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessInstanceStoreService {

  private processInstanceArray: ProcessInstance[] = [
    new ProcessInstance('не существует', 'null', 'none', new Date(2020, 0, 1), 'что это вообще'),
    new ProcessInstance('отсутствует', 'undefined', 'missing', new Date(2020, 11, 31), 'что это вообще')];

  constructor(private http: HttpClient) { }

  get(): Observable<ProcessInstance[]> {
    return from([this.processInstanceArray]);
  }

  add(processInstance: ProcessInstance): void {
    this.processInstanceArray.push(processInstance);
  }
}
