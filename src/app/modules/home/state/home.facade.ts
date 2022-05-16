import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Display, LastVoted, Name, Source } from '@core/interfaces/common.interfaces';
import { Observable } from 'rxjs';
import {
  displaySelector,
  lastVotedSelector,
  namesSelector
} from '.';
import * as homeActions from './home.actions';

@Injectable()
export class HomeFacade {

  constructor(private store: Store<any>) {}

  public names$: Observable<Name[]> = this.store.select(namesSelector);
  public lastVoted$: Observable<LastVoted> = this.store.select(lastVotedSelector);
  public display$: Observable<Display> = this.store.select(displaySelector);

  public requestNames(): void {
    this.store.dispatch(homeActions.requestNames());
  }

  public resetLastVoted(): void {
    this.store.dispatch(homeActions.setLastVoted({lastVotedId: null, source: Source.list}));
  }

  public setDisplay(display: Display): void {
    localStorage.setItem('display', display);
    this.store.dispatch(homeActions.setDisplay({display}));
  }
}
