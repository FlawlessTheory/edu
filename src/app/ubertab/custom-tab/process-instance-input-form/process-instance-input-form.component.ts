import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'process-definition-input-form',
  templateUrl: './process-instance-input-form.component.html',
  styleUrls: ['./process-instance-input-form.component.css']
})
export class ProcessDefinitionInputFormComponent implements OnInit {
  @Output()
  newProcessDefinition: EventEmitter<ProcessDefinition> = new EventEmitter<ProcessDefinition>();

  formGroup: FormGroup;

  constructor() {
    const ID = new FormControl('', [Validators.required, Validators.minLength(5)]);
    const name = new FormControl('', [Validators.required, Validators.minLength(5)]);
    const organization = new FormControl('');
    this.formGroup = new FormGroup({ID: ID, name: name, organization: organization});
  }

  ngOnInit(): void {
  }

  createProcessDefinition(): void {
      if (this.formGroup.valid) {
        const ID = this.formGroup.get('ID').value;
        const name = this.formGroup.get('name').value;
        const organization = this.formGroup.get('organization').value;
        const processDefinition = new ProcessDefinition('прямо из киберпечи', ID, name, 1, organization);
        this.newProcessDefinition.emit(processDefinition);
      }
      else {
        alert('чой-та неправильно');
      }
    }
}
