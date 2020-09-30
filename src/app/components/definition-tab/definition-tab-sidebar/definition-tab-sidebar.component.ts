import { Component, OnInit } from '@angular/core';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';

@Component({
  selector: 'app-definition-tab-sidebar',
  templateUrl: './definition-tab-sidebar.component.html',
  styleUrls: ['./definition-tab-sidebar.component.css']
})
export class DefinitionTabSidebarComponent implements OnInit {

  constructor(private processDefinitionService: ProcessDefinitionService) { }

  ngOnInit(): void {
  }

  onCreateProcessDefinitionButtonClicked(): void {
    this.processDefinitionService.showInputForm();
  }
}
