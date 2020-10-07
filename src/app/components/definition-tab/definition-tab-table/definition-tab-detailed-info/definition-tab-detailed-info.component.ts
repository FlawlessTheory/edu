import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProcessDefinition } from 'src/app/models/process/process-definition';

@Component({
             selector: 'app-definition-tab-detailed-info',
             templateUrl: './definition-tab-detailed-info.component.html',
             styleUrls: ['./definition-tab-detailed-info.component.css']
           })
export class DefinitionTabDetailedInfoComponent implements OnDestroy {

  definitionID = 'none';
  definition: ProcessDefinition;
  private subscriptions: Subscription = new Subscription();

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private definitionService: ProcessDefinitionService) {
    const findDefinition = (elem: ProcessDefinition, index, array) => {
      return this.definitionID === elem.ID;
    };

    this.subscriptions.add(this.activatedRoute.queryParams
                               .subscribe(params => this.definitionID = params.id));
    this.subscriptions.add(this.definitionService.getProcessDefinitionArray()
                               .pipe(map((pdArray) => pdArray.find(findDefinition, this)))
                               .subscribe(definition => this.definition = definition));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  backToTable(): void {
    this.route.navigate(['../']);
  }
}
