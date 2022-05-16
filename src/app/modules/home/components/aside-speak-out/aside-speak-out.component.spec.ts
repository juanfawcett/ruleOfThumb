import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '@src/app/core/utils/testing.module';

import { AsideSpeakOutComponent } from './aside-speak-out.component';

describe('AsideSpeakOutComponent', () => {
  let component: AsideSpeakOutComponent;
  let fixture: ComponentFixture<AsideSpeakOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AsideSpeakOutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideSpeakOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
