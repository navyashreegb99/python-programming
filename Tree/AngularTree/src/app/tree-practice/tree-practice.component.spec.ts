import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreePracticeComponent } from './tree-practice.component';

describe('TreePracticeComponent', () => {
  let component: TreePracticeComponent;
  let fixture: ComponentFixture<TreePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreePracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
