import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdialogappointmentComponent } from './patientdialogappointment.component';

describe('PatientdialogappointmentComponent', () => {
  let component: PatientdialogappointmentComponent;
  let fixture: ComponentFixture<PatientdialogappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdialogappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientdialogappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
