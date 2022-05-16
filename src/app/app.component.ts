import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonFacade } from './core/state/common.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(public translate: TranslateService, private facade: CommonFacade) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  title = 'ruleOfThumb';

  ngOnInit(): void {
    this.facade.language$.subscribe((language) => this.translate.use(language));
  }
}
