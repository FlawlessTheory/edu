import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbertabComponent } from './ubertab/ubertab.component';
import { TabSwitchComponent } from './ubertab/tab-switch/tab-switch.component';
import { CustomTabComponent } from './ubertab/custom-tab/custom-tab.component';
import { SidebarComponent } from './ubertab/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UbertabComponent,
    TabSwitchComponent,
    CustomTabComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [UbertabComponent, TabSwitchComponent, CustomTabComponent, SidebarComponent]
})
export class AppModule { }