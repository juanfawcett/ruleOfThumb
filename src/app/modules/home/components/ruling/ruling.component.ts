import { Component, Input, OnInit } from '@angular/core';
import { Name, VoteType } from '@src/app/core/interfaces/common.interfaces';
import { filter } from 'rxjs';
import { HomeFacade } from '../../state/home.facade';

@Component({
  selector: 'app-ruling',
  templateUrl: './ruling.component.html',
  styleUrls: ['./ruling.component.scss']
})
export class RulingComponent implements OnInit {

  constructor(private facade: HomeFacade) { }

  readonly voteType = VoteType;

  @Input() rulingData: Name = {} as Name;

  public selectedVote: VoteType | null = null;
  public hasVoted: boolean = false;

  ngOnInit(): void {
    this.facade.lastVotedId$.pipe(filter((lastVotedId: number | null) => lastVotedId === this.rulingData.id)).subscribe(() => this.hasVoted = true);
  }

  public vote() {
    if(this.hasVoted) {
      this.selectedVote = null;
      this.hasVoted = false;
      this.facade.resetLastVoted();
    } else {
      this.facade.vote(this.selectedVote as VoteType, this.rulingData)
    }
  }

  public selectVote(voteType: VoteType){
    this.selectedVote = voteType;
  }

  get approvePercentage(): number {
    return (this.rulingData?.votes.positive * 100)/(this.rulingData?.votes.positive + this.rulingData?.votes.negative);
  }

}
