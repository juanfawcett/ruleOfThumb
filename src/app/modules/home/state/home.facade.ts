import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LastVoted, Name, Source } from '@core/interfaces/common.interfaces';
import { Observable } from 'rxjs';
import {
  lastVotedSelector,
  namesSelector
} from '.';
import * as homeActions from './home.actions';

@Injectable()
export class HomeFacade {

  constructor(private store: Store<any>) {}

  public names$: Observable<Name[]> = this.store.select(namesSelector);
  public lastVoted$: Observable<LastVoted> = this.store.select(lastVotedSelector);

  public requestNames(): void {
    this.store.dispatch(homeActions.requestNames());
  }

  public resetLastVoted(): void {
    this.store.dispatch(homeActions.setLastVoted({lastVotedId: null, source: Source.list}));
  }
}
