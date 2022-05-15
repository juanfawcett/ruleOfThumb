import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonEffects } from '@core/state/common.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonFacade } from './core/state/common.facade';
import { rootReducer } from './core/state/common.reducer';
import { CommonService } from './core/services/common.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const ROOT_REDUCER_TOKEN = new InjectionToken('Common Reducer');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    StoreModule.forRoot(ROOT_REDUCER_TOKEN),
    EffectsModule.forRoot([CommonEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 150,
    }),
  ],
  providers: [
    CommonFacade,
    CommonService,
    {
      provide: ROOT_REDUCER_TOKEN,
      useValue: rootReducer,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
