import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-speak-out',
  templateUrl: './aside-speak-out.component.html',
  styleUrls: ['./aside-speak-out.component.scss'],
})
export class AsideSpeakOutComponent implements OnInit {
  constructor() {}

  public isClosed: boolean = false;

  ngOnInit(): void {}

  public close(): void {
    this.isClosed = true;
  }
}
