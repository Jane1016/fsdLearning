import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentornavComponent } from './mentornav.component';

describe('MentornavComponent', () => {
  let component: MentornavComponent;
  let fixture: ComponentFixture<MentornavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentornavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentornavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
