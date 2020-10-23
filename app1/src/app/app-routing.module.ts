import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {
    path: 'app1/comp1',
    loadChildren: () =>
      import('./sample/sample.module').then((m) => m.SampleModule),
  },
  {
    path: 'app1/comp2',
    component: Comp2Component,
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
