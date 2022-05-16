import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language, Name, Source, Theme, VoteType } from '../interfaces/common.interfaces';
import * as commonActions from './common.actions';
@Injectable()
export class CommonFacade {
  constructor(private store: Store<any>) {}

  public theme$: Observable<Theme> = this.store.select((store) => store.common?.theme);
  public language$: Observable<Language> = this.store.select((store) => store.common?.language);

  public setTheme(theme: Theme): void {
    this.store.dispatch(commonActions.setTheme({theme}));
  }

  public setLanguage(language: Language): void {
    this.store.dispatch(commonActions.setLanguage({language}));
  }

  public vote(voteType: VoteType, ruling: Name, source: Source): void {
    this.store.dispatch(commonActions.vote({voteType, ruling, source}));
  }
}
