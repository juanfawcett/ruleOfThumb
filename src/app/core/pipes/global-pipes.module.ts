import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentagePipe } from './percentage.pipe';
import { RelativetimePipe } from './relativeTime.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [PercentagePipe, RelativetimePipe],
  exports: [PercentagePipe, RelativetimePipe],
  providers: [PercentagePipe, RelativetimePipe],
})
export class GlobalPipesModule {}
