import { Injectable } from '@angular/core';
import { ProcessInstanceStoreService } from 'src/app/services/process-instance-store.service';
import { Observable } from 'rxjs';
import { ProcessInstance } from 'src/app/models/process/process-instance';

@Injectable({
  providedIn: 'root'
})
export class ProcessInstanceService {

  constructor(private backendService: ProcessInstanceStoreService) { }

  get(): Observable<ProcessInstance[]> {
    return this.backendService.get();
  }
}
