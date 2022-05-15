import { Component, OnInit } from '@angular/core';
import { Name } from '@src/app/core/interfaces/common.interfaces';
import { Observable } from 'rxjs';
import { HomeFacade } from './state/home.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.scss']
})
export class HomeContainer implements OnInit {
  constructor(private facade: HomeFacade) {}

  ngOnInit(): void {
    this.facade.requestNames();
  }

  get rulingList$(): Observable<Name[]> {
    return this.facade.names$;
  }
}
