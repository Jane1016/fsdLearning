import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursehoneComponent } from './coursehone.component';

describe('CoursehoneComponent', () => {
  let component: CoursehoneComponent;
  let fixture: ComponentFixture<CoursehoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursehoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursehoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
