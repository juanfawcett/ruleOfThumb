import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ThumbButtonComponent } from './thumb-button/thumb-button.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ThumbButtonComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ThumbButtonComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
