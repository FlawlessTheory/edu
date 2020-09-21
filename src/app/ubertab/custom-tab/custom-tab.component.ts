import { Component, OnInit, Input } from '@angular/core';
import { BPrunning } from './bp-classes/bprunning';
import { BPschema } from './bp-classes/bpschema';

@Component({
  selector: 'custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css']
})
export class CustomTabComponent implements OnInit {
  @Input()
  currentTab: string;
  @Input()
  showForm: boolean;
  runningArray: Array<BPrunning>;
  schemasArray: Array<BPschema>;

  constructor() { }

  ngOnInit(): void {
    this.runningArray = new Array<BPrunning>(new BPrunning('не существует', 'null', new Date(2020, 0, 1), 'что это вообще'), new BPrunning('отсутствует', 'undefined', new Date(2020, 11, 31), 'что это вообще'));
    this.schemasArray = new Array<BPschema>(new BPschema('существует в воображении', 'N0TH1NG', '?', 1, 'ООО "Рога и Копыта"'), new BPschema('придумал', 'V01D', '!', 9, 'ОАО "Вектор"'));
    this.showForm = false;
  }

}
