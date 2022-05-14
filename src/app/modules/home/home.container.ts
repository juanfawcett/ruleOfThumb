import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.scss'],
})
export class HomeContainer implements OnInit {
  constructor(service: HomeService) {}

  ngOnInit(): void {}
}
