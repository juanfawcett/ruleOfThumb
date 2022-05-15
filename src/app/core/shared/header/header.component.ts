import { Component, Input, OnInit } from '@angular/core';
import { Name, VoteType } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  readonly voteType = VoteType;

  @Input() featured: Name = {} as Name;

  ngOnInit(): void {}
}
