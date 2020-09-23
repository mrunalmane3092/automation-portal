import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitelayoutComponent } from '../app/sitelayout/sitelayout.component';
import { PortalComponent } from '../app/portal/portal.component';


const routes: Routes = [
  {
    path: '',
    component: SitelayoutComponent,
    children: [
      { path: '', redirectTo: '/portal', pathMatch: 'full', },
      { path: 'portal', component: PortalComponent },
    ],
    runGuardsAndResolvers: 'always'
  },

  {
    path: '**',
    redirectTo: 'portal'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
