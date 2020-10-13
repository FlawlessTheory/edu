import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { DefinitionTabInputFormComponent } from 'src/app/components/definition-tab/definition-tab-input-form/definition-tab-input-form.component';

@Injectable({
              providedIn: 'root'
            })
export class InputGuard implements CanDeactivate<DefinitionTabInputFormComponent> {
  canDeactivate(
    component: DefinitionTabInputFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): boolean {
    if (component.chagesSaved) {
      return true;
    }
    return confirm('Вы действительно хотите закрыть форму? Все данные будут потеряны');
  }
}
