import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulingsListComponent } from './rulings-list.component';

describe('RulingsListComponent', () => {
  let component: RulingsListComponent;
  let fixture: ComponentFixture<RulingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
