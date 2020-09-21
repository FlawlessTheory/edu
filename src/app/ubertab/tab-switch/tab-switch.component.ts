import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.css']
})
export class TabSwitchComponent implements OnInit {
  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(button: string): void {
    this.buttonClicked.emit(button);
  }
}
