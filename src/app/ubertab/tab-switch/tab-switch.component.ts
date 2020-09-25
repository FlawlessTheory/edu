import { Component, OnInit } from '@angular/core';
import { ButtonClickedNotifierService } from 'src/app/services/button-clicked-notifier.service';

@Component({
  selector: 'tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.css']
})
export class TabSwitchComponent implements OnInit {

  constructor(private buttonClickedNotifierService: ButtonClickedNotifierService) { }

  ngOnInit(): void {
  }

  onButtonClicked(button: string): void {
    this.buttonClickedNotifierService.onButtonClicked(button);
  }
}
