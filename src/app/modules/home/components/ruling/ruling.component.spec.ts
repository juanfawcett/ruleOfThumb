import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoteType } from '@src/app/core/interfaces/common.interfaces';
import { TestingModule } from '@src/app/core/utils/testing.module';

import { RulingComponent } from './ruling.component';

describe('RulingComponent', () => {
  let component: RulingComponent;
  let fixture: ComponentFixture<RulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ RulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingComponent);
    component = fixture.componentInstance;
    component.rulingData = {
      id: 0,
      name: "Kanye West",
      description: "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
      category: "entertainment",
      picture: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/10/20/616feb70eb709.r_d.2811-1732-0.jpeg",
      lastUpdated: "2020-03-10T23:08:57.892Z",
      votes: {
        positive: 14,
        negative: 12
      },
      wikipedia: "http://wikipedia.com"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should vote and reset', () => {
    component.selectVote(VoteType.up);
    component.vote();
    component.vote();
    expect(component.hasVoted).toBeTrue;
  });
});
