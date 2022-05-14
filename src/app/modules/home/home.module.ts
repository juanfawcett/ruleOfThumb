import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainer } from './home.container';
import { HomeService } from './services/home.service';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [HomeContainer],
  exports: [],
  providers: [HomeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
