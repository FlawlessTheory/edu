import { Injectable } from '@angular/core';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlBase } from 'src/app/services/backend/constants';
import { catchError } from 'rxjs/operators';

@Injectable({
              providedIn: 'root'
            })
export class ProcessDefinitionStoreService {

  private processDefinitionArray: ProcessDefinition[] = [
    new ProcessDefinition('существует в воображении', 'N0TH1NG', '?', 1, 'ООО "Рога и Копыта"'),
    new ProcessDefinition('придумал', 'V01D', '!', 9, 'ОАО "Вектор"')];

  constructor(private http: HttpClient) {
  }

  get(): Observable<ProcessDefinition[]> {
    this.http.get(UrlBase + 'process-definition',
                  {
                    headers: new HttpHeaders({
                      'Referrer-Policy': '',
                                               'Access-Control-Allow-Origin': '*'
                                             })
                  })
        .pipe(catchError(val => of('something went wrong')))
        .subscribe((val) => console.log(val));

    return from([this.processDefinitionArray]);
  }

  add(processDefinition: ProcessDefinition): void {
    this.processDefinitionArray.push(processDefinition);
  }
}
