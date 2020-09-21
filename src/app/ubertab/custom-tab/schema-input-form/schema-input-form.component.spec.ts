import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaInputFormComponent } from './schema-input-form.component';

describe('SchemaInputFormComponent', () => {
  let component: SchemaInputFormComponent;
  let fixture: ComponentFixture<SchemaInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
