import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Name, Theme, VoteType } from '../interfaces/common.interfaces';
import * as commonActions from './common.actions';

@Injectable()
export class CommonFacade {
  constructor(private store: Store<any>) {}

  public theme$: Observable<Theme> = this.store.select((store) => store.common?.theme);

  public setTheme(theme: Theme): void {
    this.store.dispatch(commonActions.setTheme({theme}));
  }

  public vote(voteType: VoteType, ruling: Name): void {
    this.store.dispatch(commonActions.vote({voteType, ruling}));
  }
}
