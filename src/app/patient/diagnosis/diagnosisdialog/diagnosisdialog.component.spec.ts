import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisdialogComponent } from './diagnosisdialog.component';

describe('DiagnosisdialogComponent', () => {
  let component: DiagnosisdialogComponent;
  let fixture: ComponentFixture<DiagnosisdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosisdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
