import { Injectable } from '@angular/core';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { BehaviorSubject, Observable } from 'rxjs';
import { publishReplay, repeatWhen } from 'rxjs/operators';
import { TabService } from 'src/app/services/tab.service';
import { ProcessDefinitionStoreService } from 'src/app/services/backend/process-definition-store.service';

@Injectable()
export class ProcessDefinitionService {

  private refreshContents$: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private processDefinitionArray$: Observable<ProcessDefinition[]>;

  constructor(private tabSwitchService: TabService, private backendService: ProcessDefinitionStoreService) {
    this.processDefinitionArray$ = this.backendService.get()
                     .pipe(repeatWhen(() => this.refreshContents$),
                           publishReplay(1));
  }

  addProcessDefinition(processDefinition: ProcessDefinition): void {
    this.backendService.add(processDefinition)
        .then(() => this.refreshContents$.next(void 0))
        .then(() => this.tabSwitchService.unlockCurrentTab());
  }

  getProcessDefinitionArray(): Observable<ProcessDefinition[]> {
    return this.processDefinitionArray$;
  }

  sortProcessDefinitionArray(option: string): void {
    this.backendService.sort(option)
        .then(() => this.refreshContents$.next(void 0));
  }
}
