import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitelayoutComponent } from '../app/sitelayout/sitelayout.component';
import { PortalComponent } from '../app/portal/portal.component';
import { AboutComponent } from './about/about.component';
import { SubIframeComponent } from './shared/sub-iframe/sub-iframe.component';


const routes: Routes = [
  {
    path: '',
    component: SitelayoutComponent,
    children: [
      { path: '', redirectTo: '/portal', pathMatch: 'full', },
      { path: 'portal', component: PortalComponent },
      { path: 'about', component: AboutComponent },      
    ],
    runGuardsAndResolvers: 'always'
  },
  { path: 'iframe1', component: SubIframeComponent },

  {
    path: '**',
    redirectTo: 'portal'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
