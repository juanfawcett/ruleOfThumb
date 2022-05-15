import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { AsideAddNameComponent } from './components/aside-add-name/aside-add-name.component';
import { AsideSpeakOutComponent } from './components/aside-speak-out/aside-speak-out.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainer } from './home.container';
import { HomeService } from './services/home.service';
import { HomeEffects } from './state/home.effects';
import { HomeFacade } from './state/home.facade';
import { homeFeatureName, reducer } from './state/home.reducer';
import { HomeState } from './state/home.state';
import { RulingsListComponent } from './components/rulings-list/rulings-list.component';
import { RulingComponent } from './components/ruling/ruling.component';
import { PercentageBarComponent } from './components/percentage-bar/percentage-bar.component';
import { GlobalPipesModule } from '@src/app/core/pipes/global-pipes.module';

export const FEATURE_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<HomeState>
>('Home Reducer');

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule, SharedModule, StoreModule.forFeature(homeFeatureName, FEATURE_REDUCER_TOKEN),
    EffectsModule.forFeature([HomeEffects]), TranslateModule, GlobalPipesModule],
  declarations: [HomeContainer, AsideAddNameComponent, AsideSpeakOutComponent, RulingsListComponent, RulingComponent, PercentageBarComponent],
  exports: [],
  providers: [
    HomeService,
    HomeFacade,
    {
    provide: FEATURE_REDUCER_TOKEN,
    useValue: reducer,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
