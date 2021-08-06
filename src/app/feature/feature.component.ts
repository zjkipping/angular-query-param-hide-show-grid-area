import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { settingsPanelQueryParam, toolbarQueryParam } from '../constants';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
  showSmallSettingsPanel: Observable<boolean>;
  showLargeSettingsPanel: Observable<boolean>;
  showInfoAndStatuses: Observable<boolean>;
  showActionsToolbar: Observable<boolean>;

  constructor(activatedRoute: ActivatedRoute) {
    const queryParamMap = activatedRoute.queryParamMap;

    const toolbarQueryParamObs = queryParamMap.pipe(
      map((paramMap: ParamMap) => paramMap.get(toolbarQueryParam))
    );
    this.showInfoAndStatuses = toolbarQueryParamObs.pipe(
      map(toolbar => toolbar === 'information')
    );
    this.showActionsToolbar = toolbarQueryParamObs.pipe(
      map(toolbar => toolbar === 'actions')
    );

    const settingsPanelQueryParamObs = queryParamMap.pipe(
      map((paramMap: ParamMap) => paramMap.get(settingsPanelQueryParam))
    );
    this.showSmallSettingsPanel = settingsPanelQueryParamObs.pipe(
      map(toolbar => toolbar === 'small')
    );
    this.showLargeSettingsPanel = settingsPanelQueryParamObs.pipe(
      map(toolbar => toolbar === 'large')
    );
  }
}
