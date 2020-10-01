import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { InstanceTabComponent } from 'src/app/components/instance-tab/instance-tab.component';
import { DefinitionTabComponent } from 'src/app/components/definition-tab/definition-tab.component';
import { DefinitionTabTableComponent } from 'src/app/components/definition-tab/definition-tab-table/definition-tab-table.component';
import { DefinitionTabInputFormComponent } from 'src/app/components/definition-tab/definition-tab-input-form/definition-tab-input-form.component';
import { InstanceTabInputFormComponent } from 'src/app/components/instance-tab/instance-tab-input-form/instance-tab-input-form.component';
import { InstanceTabTableComponent } from 'src/app/components/instance-tab/instance-tab-table/instance-tab-table.component';

const routes: Routes = [
  {
    path: 'definitions', component: DefinitionTabComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/view' },
      { path: '/view', component: DefinitionTabTableComponent },
      { path: '/add', component: DefinitionTabInputFormComponent }
    ]
  },
  {
    path: 'instances', component: InstanceTabComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/view' },
      { path: '/view', component: InstanceTabTableComponent },
      { path: '/add', component: InstanceTabInputFormComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/definitions' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
