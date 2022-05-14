import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from '@environment';
import { Name } from '@src/app/core/interfaces/common.interfaces';
import api from './home.api';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  public fetchNames(): Observable<Name[]> {
    return this.http.get<Name[]>(`${ENV.apiPrefix}${api.names}`);
  }
}
