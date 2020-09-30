import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.css']
})
export class SortOptionsComponent implements OnInit {
  @Output()
  sortOptionPicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSortOptionPicked(option: string): void {
    this.sortOptionPicked.emit(option);
  }
}
