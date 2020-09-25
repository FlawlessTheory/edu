import { Component, OnInit, OnDestroy } from '@angular/core';
import { ButtonClickedNotifierService } from 'src/app/services/button-clicked-notifier.service';

@Component({
  selector: 'ubertab',
  templateUrl: './ubertab.component.html',
  styleUrls: ['./ubertab.component.css']
})
export class UbertabComponent implements OnInit, OnDestroy {
  currentTab: string;
  formIsVisible: boolean;

  constructor(private buttonClickedNotifierService: ButtonClickedNotifierService) {
    this.buttonClickedNotifierService.buttonClicked.subscribe((payload: string) => {
      switch (payload) {
        case 'instance-tab':
          this.switchTab(payload);
          break;
        case 'definition-tab':
          this.switchTab(payload);
          break;
      }
    });
  }

  ngOnInit(): void {
    this.formIsVisible = false;
  }

  ngOnDestroy(): void {
    this.buttonClickedNotifierService.buttonClicked.unsubscribe();
  }

  switchTab(tab: string): void {
    this.currentTab = tab;
  }

  showForm(): void {
    this.formIsVisible = true;
  }

  hideForm(): void {
    this.formIsVisible = false;
  }
}
