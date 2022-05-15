import { Component, Input, OnInit } from '@angular/core';
import { HomeFacade } from '@src/app/modules/home/state/home.facade';
import { filter, take } from 'rxjs';
import { LastVoted, Name, Source, VoteType } from '../../interfaces/common.interfaces';
import { CommonFacade } from '../../state/common.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private commonFacade: CommonFacade, private facade: HomeFacade) {}

  readonly voteType = VoteType;

  public featured: Name = {} as Name;
  public hasVoted: boolean = false;
  public index: number = 0;

  ngOnInit(): void {
    this.facade.names$.pipe(filter((names) => !!names.length), take(1)).subscribe((names) => {
      this.index = Math.floor(Math.random() * (names.length - 0) + 0);
    });
    this.facade.names$.pipe(filter((names) => !!names.length)).subscribe((names) => this.featured = names[this.index]);
    this.facade.lastVoted$.pipe(filter((lastVoted: LastVoted) => lastVoted.id === this.featured.id && lastVoted.source === Source.header)).subscribe(() => this.hasVoted = true);
  }

  public vote(voteType: VoteType) {
    if(!this.hasVoted) {
      this.commonFacade.vote(voteType, this.featured, Source.header)
    }
  }

  get approvePercentage(): number {
    return (this.featured?.votes.positive * 100)/(this.featured?.votes.positive + this.featured?.votes.negative);
  }
}
