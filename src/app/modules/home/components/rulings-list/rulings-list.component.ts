import { Component, Input, OnInit } from '@angular/core';
import { Display, Name, Theme } from '@src/app/core/interfaces/common.interfaces';
import { CommonFacade } from '@src/app/core/state/common.facade';

@Component({
  selector: 'app-rulings-list',
  templateUrl: './rulings-list.component.html',
  styleUrls: ['./rulings-list.component.scss']
})
export class RulingsListComponent implements OnInit {

  constructor(private facade: CommonFacade) { }

  readonly displayOptions = Display;
  readonly theme = Theme;

  @Input() rulingList: Name[] = [];
  @Input() display: Display | null = Display.grid;

  public selectedTheme: Theme = this.theme.light;

  ngOnInit(): void {
    this.facade.theme$.subscribe((theme) => this.selectedTheme = theme);
  }

  public trackByFn(index: number, ruling: Name): number {
    return ruling.id;
  }

}
