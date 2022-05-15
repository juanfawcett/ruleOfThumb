import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '@shared/header/header.component';
import { GlobalPipesModule } from '../pipes/global-pipes.module';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PercentageBarComponent } from './percentage-bar/percentage-bar.component';
import { ThumbButtonComponent } from './thumb-button/thumb-button.component';

@NgModule({
  imports: [CommonModule, TranslateModule, GlobalPipesModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ThumbButtonComponent,
    PercentageBarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ThumbButtonComponent,
    PercentageBarComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
