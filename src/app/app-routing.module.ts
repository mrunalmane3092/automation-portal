import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitelayoutComponent } from '../app/sitelayout/sitelayout.component';

const routes: Routes = [
  { path: '',
    component: SitelayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
