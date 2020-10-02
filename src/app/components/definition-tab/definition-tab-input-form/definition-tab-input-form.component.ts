import { Component, EventEmitter, Output } from '@angular/core';
import { ProcessDefinition } from 'src/app/models/process/process-definition';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';
import { Router } from '@angular/router';
import { TabService } from 'src/app/services/tab.service';

@Component({
             selector: 'app-definition-tab-input-form',
             templateUrl: './definition-tab-input-form.component.html',
             styleUrls: ['./definition-tab-input-form.component.css']
           })
export class DefinitionTabInputFormComponent {
  formGroup: FormGroup;

  constructor(private tabService: TabService,
              private definitionService: ProcessDefinitionService,
              private route: Router) {
    const ID = new FormControl('', [Validators.required, Validators.minLength(5)]);
    const name = new FormControl('', [Validators.required, Validators.minLength(5)]);
    const organization = new FormControl('');
    this.formGroup = new FormGroup({ ID: ID, name: name, organization: organization });

    this.tabService.lockCurrentTab();
  }

  createProcessDefinition(): void {
    if (this.formGroup.valid) {
      const ID = this.formGroup.get('ID').value;
      const name = this.formGroup.get('name').value;
      const organization = this.formGroup.get('organization').value;
      const processDefinition = new ProcessDefinition('прямо из киберпечи', ID, name, 1, organization);

      this.definitionService.addProcessDefinition(processDefinition);

      this.close();
    } else {
      alert('чой-та неправильно');
    }
  }

  close(): void {
    this.tabService.unlockCurrentTab();
    this.route.navigate(['../']);
  }
}
