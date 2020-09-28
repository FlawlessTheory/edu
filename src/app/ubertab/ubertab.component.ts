import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';

@Component({
  selector: 'ubertab',
  templateUrl: './ubertab.component.html',
  styleUrls: ['./ubertab.component.css'],
  providers: [TabSwitchService]
})
export class UbertabComponent implements OnInit, OnDestroy {
  currentTab: string;
  formIsVisible: boolean;

  constructor(private tabSwitchService: TabSwitchService) {
    this.tabSwitchService.tabSwitched.subscribe((tab: string) => {
      this.currentTab = tab;
    });
  }

  ngOnInit(): void {
    this.formIsVisible = false;
  }

  ngOnDestroy(): void {
    this.tabSwitchService.tabSwitched.unsubscribe();
  }

  showForm(): void {
    this.formIsVisible = true;
  }

  hideForm(): void {
    this.formIsVisible = false;
  }
}
