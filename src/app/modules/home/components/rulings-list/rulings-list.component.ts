import { Component, Input, OnInit } from '@angular/core';
import { Name } from '@src/app/core/interfaces/common.interfaces';

@Component({
  selector: 'app-rulings-list',
  templateUrl: './rulings-list.component.html',
  styleUrls: ['./rulings-list.component.scss']
})
export class RulingsListComponent implements OnInit {

  constructor() { }

  @Input() rulingList: Name[] = [];

  ngOnInit(): void {
  }

  public trackByFn(index: number, ruling: Name): number {
    return ruling.id;
  }

}
