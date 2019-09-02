import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentheadComponent } from './studenthead.component';

describe('StudentheadComponent', () => {
  let component: StudentheadComponent;
  let fixture: ComponentFixture<StudentheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
