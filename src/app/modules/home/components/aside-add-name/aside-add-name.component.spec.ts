import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '@src/app/core/utils/testing.module';

import { AsideAddNameComponent } from './aside-add-name.component';

describe('AsideAddNameComponent', () => {
  let component: AsideAddNameComponent;
  let fixture: ComponentFixture<AsideAddNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AsideAddNameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideAddNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
