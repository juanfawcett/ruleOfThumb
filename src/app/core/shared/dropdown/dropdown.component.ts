import { Component, OnInit } from '@angular/core';
import { HomeFacade } from '@src/app/modules/home/state/home.facade';
import { Observable } from 'rxjs';
import { Display } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor(private facade: HomeFacade) { }

  readonly triangleIcon = "../../../assets/img/triangle.svg";
  readonly display = Display;

  public isOpened: boolean = false;

  ngOnInit(): void {
  }

  public toggleOpen(): void {
    this.isOpened = !this.isOpened;
  }

  public setValue(value: Display): void {
    this.isOpened = false;
    this.facade.setDisplay(value)
  }

  get selectedDisplay$(): Observable<Display> {
    return this.facade.display$;
  }
}
