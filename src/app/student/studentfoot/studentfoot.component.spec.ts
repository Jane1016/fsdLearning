import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfootComponent } from './studentfoot.component';

describe('StudentfootComponent', () => {
  let component: StudentfootComponent;
  let fixture: ComponentFixture<StudentfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
