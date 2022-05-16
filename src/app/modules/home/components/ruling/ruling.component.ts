import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DESKTOP_BREAKPOINT_SIZE, listHeights, TABLET_BREAKPOINT_SIZE } from '@src/app/core/constants/common.constants';
import { Display, LastVoted, Name, Source, VoteType } from '@src/app/core/interfaces/common.interfaces';
import { CommonFacade } from '@src/app/core/state/common.facade';
import { filter } from 'rxjs';
import { HomeFacade } from '../../state/home.facade';

@Component({
  selector: 'app-ruling',
  templateUrl: './ruling.component.html',
  styleUrls: ['./ruling.component.scss']
})
export class RulingComponent implements OnInit {

  constructor(public facade: HomeFacade, private commonFacade: CommonFacade, private changeDetectorRef: ChangeDetectorRef) { }

  readonly voteType = VoteType;
  readonly displayOptions = Display;

  @ViewChild('ruling', { static: true }) public ruling: ElementRef = {} as ElementRef;

  @Input() rulingData: Name = {} as Name;
  @Input() display: Display | null = Display.grid;

  public selectedVote: VoteType | null = null;
  public hasVoted: boolean = false;

  ngOnInit(): void {
    this.facade.lastVoted$.pipe(filter((lastVoted: LastVoted) => lastVoted.id === this.rulingData.id && lastVoted.source === Source.list)).subscribe(() => this.hasVoted = true);
  }

  public vote() {
    if (this.hasVoted) {
      this.selectedVote = null;
      this.hasVoted = false;
      this.facade.resetLastVoted();
    } else {
      this.commonFacade.vote(this.selectedVote as VoteType, this.rulingData, Source.list)
    }
  }

  public selectVote(voteType: VoteType) {
    this.selectedVote = voteType;
  }

  @HostListener('window:resize', ['$event'])
  documentHasResized($event: any): void {
    this.changeDetectorRef.detectChanges();
  }

  get approvePercentage(): number {
    return (this.rulingData?.votes.positive * 100) / (this.rulingData?.votes.positive + this.rulingData?.votes.negative);
  }

  get height(): string {
    if(this.display === this.displayOptions.grid) return `${this.ruling?.nativeElement?.offsetWidth}px`;
    if(window.innerWidth >= DESKTOP_BREAKPOINT_SIZE) return `${listHeights.desktop}`;
    if(window.innerWidth >= TABLET_BREAKPOINT_SIZE) return `${listHeights.tablet}`;
    return `${listHeights.mobile}`;
  }

}
