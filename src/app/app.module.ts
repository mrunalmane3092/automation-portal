import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitelayoutComponent } from './sitelayout/sitelayout.component';
import { PortalComponent } from './portal/portal.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import { ButtonsComponent } from './shared/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    SitelayoutComponent,
    PortalComponent,
    SearchInputComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
