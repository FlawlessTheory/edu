import { Component } from '@angular/core';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';

@Component({
             selector: 'app-definition-tab',
             templateUrl: './definition-tab.component.html',
             styleUrls: ['./definition-tab.component.css'],
             providers: [ProcessDefinitionService]
           })
export class DefinitionTabComponent {

  constructor() {
  }
}
