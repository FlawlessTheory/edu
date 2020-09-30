import { Component, OnInit } from '@angular/core';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';
import { ProcessInstanceService } from 'src/app/services/process-instance.service';

@Component({
  selector: 'ubertab',
  templateUrl: './ubertab.component.html',
  styleUrls: ['./ubertab.component.css'],
  providers: [ProcessDefinitionService, ProcessInstanceService]
})
export class UbertabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
