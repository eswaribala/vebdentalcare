import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchinventoryComponent } from './searchinventory.component';

describe('SearchinventoryComponent', () => {
  let component: SearchinventoryComponent;
  let fixture: ComponentFixture<SearchinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchinventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
