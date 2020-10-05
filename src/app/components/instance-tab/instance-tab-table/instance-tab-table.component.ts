import { Component, OnInit } from '@angular/core';
import { ProcessInstanceService } from 'src/app/services/process-instance.service';
import { Observable } from 'rxjs';
import { ProcessInstance } from 'src/app/models/process/process-instance';

@Component({
             selector: 'app-instance-tab-table',
             templateUrl: './instance-tab-table.component.html',
             styleUrls: ['./instance-tab-table.component.css']
           })
export class InstanceTabTableComponent implements OnInit {

  processInstanceArray$: Observable<ProcessInstance[]>;

  constructor(private instanceService: ProcessInstanceService) {
  }

  ngOnInit(): void {
    this.processInstanceArray$ = this.instanceService.get();
  }

}
