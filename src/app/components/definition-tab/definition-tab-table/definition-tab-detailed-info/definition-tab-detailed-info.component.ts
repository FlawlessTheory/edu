import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessDefinitionService } from 'src/app/services/process-definition.service';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
             selector: 'app-definition-tab-detailed-info',
             templateUrl: './definition-tab-detailed-info.component.html',
             styleUrls: ['./definition-tab-detailed-info.component.css']
           })
export class DefinitionTabDetailedInfoComponent implements OnDestroy {

  definitionID: string;
  private routeSub: Subscription;

  state: string;
  name: string;
  version: number;
  organization: string;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private definitionService: ProcessDefinitionService) {
    this.routeSub = this.activatedRoute.queryParams
                        .subscribe(params => this.definitionID = params.id);

    this.definitionService.getProcessDefinitionArray()
        .pipe(map(pdArray => pdArray.find(pd => pd.ID === this.definitionID)),
              tap(definition => {
                this.state = definition.state;
                this.name = definition.name;
                this.version = definition.version;
                this.organization = definition.organization;
              }));
  }

  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  backToTable(): void {
    this.route.navigate(['../']);
  }
}
