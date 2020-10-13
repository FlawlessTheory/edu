import { Component, OnInit } from '@angular/core';

@Component({
             selector: 'app-instance-tab-sidebar',
             templateUrl: './instance-tab-sidebar.component.html',
             styleUrls: ['./instance-tab-sidebar.component.css']
           })
export class InstanceTabSidebarComponent implements OnInit {

  isFolded = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  fold(): void {
    this.isFolded = true;
  }

  unfold(): void {
    this.isFolded = false;
  }
}
