import { Component, EventEmitter, Output } from '@angular/core';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-definition-tab-input-form',
  templateUrl: './definition-tab-input-form.component.html',
  styleUrls: ['./definition-tab-input-form.component.css']
})
export class DefinitionTabInputFormComponent {
  @Output()
  definitionCreated: EventEmitter<ProcessDefinition> = new EventEmitter<ProcessDefinition>();

  formGroup: FormGroup;

  constructor() {
    const ID = new FormControl('', [Validators.required, Validators.minLength(5)]);
    const name = new FormControl('', [Validators.required, Validators.minLength(5)]);
    const organization = new FormControl('');
    this.formGroup = new FormGroup({ID: ID, name: name, organization: organization});
  }

  createProcessDefinition(): void {
    if (this.formGroup.valid) {
      const ID = this.formGroup.get('ID').value;
      const name = this.formGroup.get('name').value;
      const organization = this.formGroup.get('organization').value;
      const processDefinition = new ProcessDefinition('прямо из киберпечи', ID, name, 1, organization);

      this.definitionCreated.emit(processDefinition);
    }
    else {
      alert('чой-та неправильно');
    }
  }
}
