import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { InputFormService } from 'src/app/services/input-form.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  currentTab: string;

  constructor(private tabSwitchService: TabSwitchService,
              private inputFormService: InputFormService) {
    this.tabSwitchService.tabSwitched.subscribe((tab: string) => this.currentTab = tab );
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tabSwitchService.tabSwitched.unsubscribe();
  }

  onCreateProcessDefinitionButtonClicked(): void {
    this.tabSwitchService.lockCurrentTab();
    this.inputFormService.onCreateButtonClicked();
  }
}
