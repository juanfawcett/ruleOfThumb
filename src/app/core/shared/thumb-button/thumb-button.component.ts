import { Component, Input, OnInit } from '@angular/core';
import { THUMB_DOWN_ICON_PATH, THUMB_UP_ICON_PATH } from '../../constants/common.constants';
import { VoteType } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-thumb-button',
  templateUrl: './thumb-button.component.html',
  styleUrls: ['./thumb-button.component.scss']
})
export class ThumbButtonComponent implements OnInit {

  constructor() { }

  @Input() type: VoteType = VoteType.up;
  @Input() selected: boolean = false;

  ngOnInit(): void {
  }

  get ariaAlt(): string {
    return `thumbs ${VoteType[this.type]}`;
  }

  get icon(): string {
    return this.type === VoteType.up ? THUMB_UP_ICON_PATH : THUMB_DOWN_ICON_PATH;
  }

}
