import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BPschema } from '../bp-classes/bpschema';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'schema-input-form',
  templateUrl: './schema-input-form.component.html',
  styleUrls: ['./schema-input-form.component.css']
})
export class SchemaInputFormComponent implements OnInit {
  @Output()
  newSchema: EventEmitter<BPschema> = new EventEmitter<BPschema>();

  schemaForm: FormGroup;

  constructor() {
    const schemaID = new FormControl('', [Validators.required, Validators.minLength(5)]);
    const schemaName = new FormControl('', [Validators.required, Validators.minLength(5)]);
    const schemaOrganization = new FormControl('');
    this.schemaForm = new FormGroup({schemaID, schemaName, schemaOrganization});
  }

  ngOnInit(): void {
  }

  createSchema(): void {
      if (this.schemaForm.valid) {
        const ID = this.schemaForm.get('schemaID').value;
        const name = this.schemaForm.get('schemaName').value;
        const organization = this.schemaForm.get('schemaOrganization').value;
        const schema = new BPschema('прямо из киберпечи', ID, name, 1, organization);
        this.newSchema.emit(schema);
      }
      else {
        alert('чой-та неправильно');
      }
    }
}
