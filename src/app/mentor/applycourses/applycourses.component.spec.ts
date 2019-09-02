import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycoursesComponent } from './applycourses.component';

describe('ApplycoursesComponent', () => {
  let component: ApplycoursesComponent;
  let fixture: ComponentFixture<ApplycoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplycoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplycoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
