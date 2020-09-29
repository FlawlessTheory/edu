import { Injectable } from '@angular/core';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { ProcessDefinitionStoreService } from 'src/app/services/process-definition-store.service';

@Injectable()
export class ProcessDefinitionService {

  inputFormOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private tabSwitchService: TabSwitchService, private backendService: ProcessDefinitionStoreService) { }

  add(processDefinition: ProcessDefinition): Observable<ProcessDefinition[]> {
    this.backendService.add(processDefinition);

    this.inputFormOpened$.next(false);
    this.tabSwitchService.unlockCurrentTab();

    return this.backendService.get();
  }

  get(): Observable<ProcessDefinition[]> {
    return this.backendService.get();
  }

  sort(option: string): Observable<ProcessDefinition[]> {
    return this.backendService.get().pipe(
      map(pdArray => {
        return pdArray.sort((a, b) => {
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
      })
    );
  }

  showInputForm(): void {
    this.inputFormOpened$.next(true);
    this.tabSwitchService.lockCurrentTab();
  }
}
