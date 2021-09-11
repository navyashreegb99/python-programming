import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeLocComponent } from './office-loc.component';

describe('OfficeLocComponent', () => {
  let component: OfficeLocComponent;
  let fixture: ComponentFixture<OfficeLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeLocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
