import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitelayoutComponent } from './sitelayout/sitelayout.component';
import { PortalComponent } from './portal/portal.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import { ButtonsComponent } from './shared/buttons/buttons.component';
import { TableComponent } from './shared/table/table.component';
import { ModalsComponent } from './shared/modals/modals.component';

@NgModule({
  declarations: [
    AppComponent,
    SitelayoutComponent,
    PortalComponent,
    DropdownComponent,
    SearchInputComponent,
    ButtonsComponent,
    TableComponent,
    ModalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
