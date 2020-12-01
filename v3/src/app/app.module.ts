import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitelayoutComponent } from './sitelayout/sitelayout.component';
import { PortalComponent } from './portal/portal.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import { ButtonsComponent } from './shared/buttons/buttons.component';
import { TableComponent } from './shared/table/table.component';
import { ModalsComponent } from './shared/modals/modals.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './shared/form/form.component';
import { IframesComponent } from './shared/iframes/iframes.component';
import { SubIframeComponent } from './shared/sub-iframe/sub-iframe.component';
import { WindowComponent } from './shared/window/window.component';
import { LoadTestingComponent } from './load-testing/load-testing.component';
import { IframesDisplayComponent } from './iframes-display/iframes-display.component';
import { BackButtonDirective } from './directives/back-button.directive';

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
    AboutComponent,
    FormComponent,
    IframesComponent,
    SubIframeComponent,
    WindowComponent,
    LoadTestingComponent,
    IframesDisplayComponent,
    BackButtonDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
