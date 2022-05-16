import { InjectionToken, NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { GlobalPipesModule } from '@core/pipes/global-pipes.module';
import { CommonFacade } from '../state/common.facade';
import { rootReducer } from '../state/common.reducer';
import { HomeFacade } from '@src/app/modules/home/state/home.facade';

@NgModule({
  imports: [
    RouterTestingModule,
    GlobalPipesModule,
    TranslateModule.forRoot(),
    StoreModule.forRoot(rootReducer)
  ],
  exports: [TranslateModule, GlobalPipesModule],
  providers: [CommonFacade, HomeFacade],
})
export class TestingModule {}