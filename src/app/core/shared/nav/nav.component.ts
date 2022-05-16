import { Component, OnInit } from '@angular/core';
import { Theme } from '../../interfaces/common.interfaces';
import { CommonFacade } from '../../state/common.facade';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private facade: CommonFacade) {}

  readonly dark: string = '../../../assets/img/dark-mode.png';
  readonly light: string = '../../../assets/img/light-mode.png';
  readonly theme = Theme;

  public selectedTheme: Theme = this.theme.light;

  ngOnInit(): void {
    this.facade.theme$.subscribe((theme) => this.selectedTheme = theme);
  }

  setTheme(): void {
    this.facade.setTheme(this.selectedTheme === this.theme.dark ? this.theme.light : this.theme.dark)
  }
}
