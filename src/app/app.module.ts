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
import { TabSwitchService } from 'src/app/services/tab-switch.service';
import { ProcessDefinitionStoreService } from 'src/app/services/backend/process-definition-store.service';
import { ProcessInstanceStoreService } from 'src/app/services/backend/process-instance-store.service';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TabSwitchService, ProcessDefinitionStoreService, ProcessInstanceStoreService],
  bootstrap: [AppComponent],
  exports: [UbertabComponent, TabSwitchComponent, CustomTabComponent, SidebarComponent, ProcessDefinitionInputFormComponent]
})
export class AppModule { }
