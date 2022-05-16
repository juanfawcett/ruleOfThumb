import { Component, OnInit } from '@angular/core';
import { Theme } from '../../interfaces/common.interfaces';
import { CommonFacade } from '../../state/common.facade';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private facade: CommonFacade) {}

  readonly theme = Theme;

  public selectedTheme: Theme = this.theme.light;

  ngOnInit(): void {
    this.facade.theme$.subscribe((theme) => this.selectedTheme = theme);
  }
}
