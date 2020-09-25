import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbertabComponent } from './ubertab/ubertab.component';
import { TabSwitchComponent } from './ubertab/tab-switch/tab-switch.component';
import { CustomTabComponent } from './ubertab/custom-tab/custom-tab.component';
import { SidebarComponent } from './ubertab/sidebar/sidebar.component';
import { ProcessDefinitionInputFormComponent } from 'src/app/ubertab/custom-tab/process-instance-input-form/process-instance-input-form.component';
import { SortOptionsComponent } from './ubertab/custom-tab/sort-options/sort-options.component';
import { ButtonClickedNotifierService } from 'src/app/services/button-clicked-notifier.service';

@NgModule({
  declarations: [
    AppComponent,
    UbertabComponent,
    TabSwitchComponent,
    CustomTabComponent,
    SidebarComponent,
    ProcessDefinitionInputFormComponent,
    SortOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ButtonClickedNotifierService],
  bootstrap: [AppComponent],
  exports: [UbertabComponent, TabSwitchComponent, CustomTabComponent, SidebarComponent, ProcessDefinitionInputFormComponent]
})
export class AppModule { }
