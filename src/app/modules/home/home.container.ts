import { Component, OnInit } from '@angular/core';
import { Name } from '@src/app/core/interfaces/common.interfaces';
import { filter, Observable, take } from 'rxjs';
import { HomeFacade } from './state/home.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.scss']
})
export class HomeContainer implements OnInit {
  constructor(private facade: HomeFacade) {}

  public featuredName: Name = {} as Name;

  ngOnInit(): void {
    this.facade.requestNames();
    this.facade.names$.pipe(filter((names) => !!names.length), take(1)).subscribe((names) => this.featuredName = names[Math.floor(Math.random() * (names.length - 0) + 0)]);
  }

  get rulingList$(): Observable<Name[]> {
    return this.facade.names$;
  }
}
