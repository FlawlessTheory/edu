import { Component, OnInit } from '@angular/core';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';
import { Router } from '@angular/router';

@Component({
             selector: 'app-definition-tab-sidebar',
             templateUrl: './definition-tab-sidebar.component.html',
             styleUrls: ['./definition-tab-sidebar.component.css']
           })
export class DefinitionTabSidebarComponent implements OnInit {

  isFolded = false;

  constructor(private processDefinitionService: ProcessDefinitionService,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  onCreateProcessDefinitionButtonClicked(): void {
    this.route.navigate(['../definitions/add'])
        .catch((err) => console.log('something went wrong in sidebar: ', err));
  }

  fold(): void {
    this.isFolded = true;
  }

  unfold(): void {
    this.isFolded = false;
  }
}
