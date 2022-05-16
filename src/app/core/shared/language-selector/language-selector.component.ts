import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FLAGS } from '../../constants/common.constants';
import { Language } from '../../interfaces/common.interfaces';
import { CommonFacade } from '../../state/common.facade';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(private facade: CommonFacade) { }

  readonly triangleIcon = "../../../assets/img/triangle.svg";
  readonly languages = Language;
  readonly flags = FLAGS;

  public isOpened: boolean = false;

  ngOnInit(): void {
  }

  public toggleOpen(): void {
    this.isOpened = !this.isOpened;
  }

  public setValue(value: Language): void {
    this.isOpened = false;
    this.facade.setLanguage(value)
  }

  get selectedLanguage$(): Observable<Language> {
    return this.facade.language$;
  }
}
