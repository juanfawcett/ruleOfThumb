import { Component, Input, OnInit } from '@angular/core';
import { LastVoted, Name, Source, VoteType } from '@src/app/core/interfaces/common.interfaces';
import { CommonFacade } from '@src/app/core/state/common.facade';
import { filter } from 'rxjs';
import { HomeFacade } from '../../state/home.facade';

@Component({
  selector: 'app-ruling',
  templateUrl: './ruling.component.html',
  styleUrls: ['./ruling.component.scss']
})
export class RulingComponent implements OnInit {

  constructor(private facade: HomeFacade, private commonFacade: CommonFacade) { }

  readonly voteType = VoteType;

  @Input() rulingData: Name = {} as Name;

  public selectedVote: VoteType | null = null;
  public hasVoted: boolean = false;

  ngOnInit(): void {
    this.facade.lastVoted$.pipe(filter((lastVoted: LastVoted) => lastVoted.id === this.rulingData.id && lastVoted.source === Source.list)).subscribe(() => this.hasVoted = true);
  }

  public vote() {
    if(this.hasVoted) {
      this.selectedVote = null;
      this.hasVoted = false;
      this.facade.resetLastVoted();
    } else {
      this.commonFacade.vote(this.selectedVote as VoteType, this.rulingData, Source.list)
    }
  }

  public selectVote(voteType: VoteType){
    this.selectedVote = voteType;
  }

  get approvePercentage(): number {
    return (this.rulingData?.votes.positive * 100)/(this.rulingData?.votes.positive + this.rulingData?.votes.negative);
  }

}
