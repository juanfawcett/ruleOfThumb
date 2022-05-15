import { Component, Input, OnInit } from '@angular/core';
import { THUMB_DOWN_ICON_PATH, THUMB_UP_ICON_PATH } from '@src/app/core/constants/common.constants';

@Component({
  selector: 'app-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.scss']
})
export class PercentageBarComponent implements OnInit {

  constructor() { }

  readonly thumbUpIconPath = THUMB_UP_ICON_PATH;
  readonly thumbDownIconPath = THUMB_DOWN_ICON_PATH;

  @Input() approvePercentage: number = 0;

  ngOnInit(): void {
  }

}
