import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitelayoutComponent } from '../app/sitelayout/sitelayout.component';
import { PortalComponent } from '../app/portal/portal.component';
import { AboutComponent } from './about/about.component';
import { SubIframeComponent } from './shared/sub-iframe/sub-iframe.component';
import { WindowComponent } from './shared/window/window.component';
import { LoadTestingComponent } from './load-testing/load-testing.component';
import { IframesDisplayComponent } from './iframes-display/iframes-display.component';

const routes: Routes = [
  {
    path: '',
    component: SitelayoutComponent,
    children: [
      { path: '', redirectTo: '/portal', pathMatch: 'full', },
      { path: 'portal', component: PortalComponent },
      { path: 'about', component: AboutComponent }, 
      { path: 'load-testing', component: LoadTestingComponent },
      { path: 'iframes-display', component: IframesDisplayComponent }

    ],
    runGuardsAndResolvers: 'always'
  },
  { path: 'iframe1', component: SubIframeComponent },
  { path: 'window', component: WindowComponent },
  {
    path: '**',
    redirectTo: 'portal'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
