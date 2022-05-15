import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbButtonComponent } from './thumb-button.component';

describe('VoteButtonComponent', () => {
  let component: ThumbButtonComponent;
  let fixture: ComponentFixture<ThumbButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
