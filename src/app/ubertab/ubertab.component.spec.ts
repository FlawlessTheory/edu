import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbertabComponent } from './ubertab.component';

describe('UbertabComponent', () => {
  let component: UbertabComponent;
  let fixture: ComponentFixture<UbertabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbertabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
