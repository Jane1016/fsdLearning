import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorfootComponent } from './mentorfoot.component';

describe('MentorfootComponent', () => {
  let component: MentorfootComponent;
  let fixture: ComponentFixture<MentorfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
