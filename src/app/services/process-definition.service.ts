import { Injectable } from '@angular/core';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import { TabService } from 'src/app/services/tab.service';
import { ProcessDefinitionStoreService } from 'src/app/services/backend/process-definition-store.service';

@Injectable()
export class ProcessDefinitionService {

  private processDefinitionArray$: Observable<ProcessDefinition[]>;

  constructor(private tabSwitchService: TabService, private backendService: ProcessDefinitionStoreService) {
    this.processDefinitionArray$ = this.backendService.get()
                                       .pipe(
                                         publishReplay(1),
                                         refCount());
  }

  addProcessDefinition(processDefinition: ProcessDefinition): void {
    this.backendService.add(processDefinition);
    this.tabSwitchService.unlockCurrentTab();
  }

  getProcessDefinitionArray(): Observable<ProcessDefinition[]> {
    return this.processDefinitionArray$;
  }

  sortProcessDefinitionArray(option: string): void {
    this.backendService.sort(option);
  }
}
