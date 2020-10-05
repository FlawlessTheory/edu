import { Component, OnInit } from '@angular/core';
import { ProcessInstanceService } from 'src/app/services/process-instance.service';

@Component({
             selector: 'app-instance-tab',
             templateUrl: './instance-tab.component.html',
             styleUrls: ['./instance-tab.component.css'],
             providers: [ProcessInstanceService]
           })
export class InstanceTabComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
