import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpharmacyComponent } from './searchpharmacy.component';

describe('SearchpharmacyComponent', () => {
  let component: SearchpharmacyComponent;
  let fixture: ComponentFixture<SearchpharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchpharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
