import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';

import { ExampleThreeComponent } from './example-three/example-three.component';
import { LimitLettersPipe } from './resources/limit-letters.pipe';
import { ExampleFourComponent } from './example-four/example-four.component';
import { StoreModule } from '@ngrx/store';
import * as fromExampleFour from './state/example-four.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExampleFourEffects } from './state/example-four.effects';

@NgModule({
  declarations: [
    ExampleOneComponent,
    ExampleTwoComponent,
    LimitLettersPipe,
    ExampleThreeComponent,
    ExampleFourComponent,
  ],
  imports: [CommonModule, ExamplesRoutingModule, StoreModule.forFeature(fromExampleFour.exampleFourFeatureKey, fromExampleFour.reducer), EffectsModule.forFeature([ExampleFourEffects])],
})
export class ExamplesModule {}
