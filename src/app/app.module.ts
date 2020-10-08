import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabSwitchComponent } from './components/tab-switch/tab-switch.component';
import { TabService } from 'src/app/services/tab.service';
import { ProcessDefinitionStoreService } from 'src/app/services/backend/process-definition-store.service';
import { ProcessInstanceStoreService } from 'src/app/services/backend/process-instance-store.service';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { DefinitionTabComponent } from './components/definition-tab/definition-tab.component';
import { InstanceTabComponent } from './components/instance-tab/instance-tab.component';
import { DefinitionTabSidebarComponent } from './components/definition-tab/definition-tab-sidebar/definition-tab-sidebar.component';
import { DefinitionTabSortOptionsComponent } from './components/definition-tab/definition-tab-sort-options/definition-tab-sort-options.component';
import { DefinitionTabTableComponent } from './components/definition-tab/definition-tab-table/definition-tab-table.component';
import { DefinitionTabInputFormComponent } from './components/definition-tab/definition-tab-input-form/definition-tab-input-form.component';
import { InstanceTabTableComponent } from './components/instance-tab/instance-tab-table/instance-tab-table.component';
import { InstanceTabSidebarComponent } from './components/instance-tab/instance-tab-sidebar/instance-tab-sidebar.component';
import { InstanceTabSortOptionsComponent } from './components/instance-tab/instance-tab-sort-options/instance-tab-sort-options.component';
import { InstanceTabInputFormComponent } from './components/instance-tab/instance-tab-input-form/instance-tab-input-form.component';
import { DefinitionTabDetailedInfoComponent } from './components/definition-tab/definition-tab-table/definition-tab-detailed-info/definition-tab-detailed-info.component';

@NgModule({
            declarations: [
              AppComponent,
              TabSwitchComponent,
              PageNotFoundComponent,
              DefinitionTabComponent,
              InstanceTabComponent,
              DefinitionTabSidebarComponent,
              DefinitionTabSortOptionsComponent,
              DefinitionTabTableComponent,
              DefinitionTabInputFormComponent,
              InstanceTabTableComponent,
              InstanceTabSidebarComponent,
              InstanceTabSortOptionsComponent,
              InstanceTabInputFormComponent,
              DefinitionTabDetailedInfoComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              ReactiveFormsModule
            ],
            providers: [TabService, ProcessDefinitionStoreService, ProcessInstanceStoreService],
            bootstrap: [AppComponent],
            exports: [RouterModule, TabSwitchComponent]
          })
export class AppModule {
}
