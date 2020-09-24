import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitelayoutComponent } from './sitelayout/sitelayout.component';
import { PortalComponent } from './portal/portal.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    SitelayoutComponent,
    PortalComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
