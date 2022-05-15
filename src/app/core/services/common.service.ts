import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from '@environment';
import { Name, VoteType } from '@src/app/core/interfaces/common.interfaces';
import api from './common.api';

@Injectable()
export class CommonService {
  constructor(private http: HttpClient) {}
  
  public vote(voteType: VoteType, ruling: Name): Observable<any> {
    return this.http.patch(`${ENV.apiPrefix}${api.names}/${ruling.id}`,
    {"votes": {
      "positive": voteType === VoteType.up ? ruling.votes.positive + 1 : ruling.votes.positive,
      "negative": voteType === VoteType.down ? ruling.votes.negative + 1 : ruling.votes.negative, }});
  }
}