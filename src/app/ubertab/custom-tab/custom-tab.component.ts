import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css']
})
export class CustomTabComponent implements OnInit {
  @Input() currentTab: string;

  constructor() { }

  ngOnInit(): void {
  }

}
