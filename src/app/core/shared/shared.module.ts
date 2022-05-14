import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AsideAddNameComponent } from '@shared/aside-add-name/aside-add-name.component';
import { AsideSpeakOutComponent } from '@shared/aside-speak-out/aside-speak-out.component';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [
    AsideAddNameComponent,
    AsideSpeakOutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  exports: [
    AsideAddNameComponent,
    AsideSpeakOutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
