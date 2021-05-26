import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFourComponent } from './example-four/example-four.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { ExampleTwoComponent } from './example-two/example-two.component';

const routes: Routes = [
  { path: 'example-one', component: ExampleOneComponent },
  { path: 'example-two', component: ExampleTwoComponent },
  { path: 'example-three', component: ExampleThreeComponent },
  { path: 'example-four', component: ExampleFourComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
