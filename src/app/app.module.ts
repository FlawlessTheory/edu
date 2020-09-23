import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbertabComponent } from './ubertab/ubertab.component';
import { TabSwitchComponent } from './ubertab/tab-switch/tab-switch.component';
import { CustomTabComponent } from './ubertab/custom-tab/custom-tab.component';
import { SidebarComponent } from './ubertab/sidebar/sidebar.component';
import { SchemaInputFormComponent } from './ubertab/custom-tab/schema-input-form/schema-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UbertabComponent,
    TabSwitchComponent,
    CustomTabComponent,
    SidebarComponent,
    SchemaInputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [UbertabComponent, TabSwitchComponent, CustomTabComponent, SidebarComponent, SchemaInputFormComponent]
})
export class AppModule { }
