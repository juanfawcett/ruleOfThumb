import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '@src/app/core/utils/testing.module';

import { HomeContainer } from './home.container';
import { HomeFacade } from './state/home.facade';
import { initialState } from './state/home.reducer';

describe('HomeComponent', () => {
  let component: HomeContainer;
  let fixture: ComponentFixture<HomeContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [HomeContainer],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function provideMockStore(arg0: { initialState: any; }): any {
  throw new Error('Function not implemented.');
}

