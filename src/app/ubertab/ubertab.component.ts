import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { InputFormService } from 'src/app/services/input-form.service';

@Component({
  selector: 'ubertab',
  templateUrl: './ubertab.component.html',
  styleUrls: ['./ubertab.component.css'],
  providers: [TabSwitchService, InputFormService]
})
export class UbertabComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
