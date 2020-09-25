import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  currentTab: string;

  @Output()
  createProcessDefinitionButtonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreateProcessDefinitionButtonClicked(): void {
    this.createProcessDefinitionButtonClicked.emit(true);
  }
}
