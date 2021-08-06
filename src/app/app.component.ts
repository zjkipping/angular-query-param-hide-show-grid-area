import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { settingsPanelQueryParam, toolbarQueryParam } from './constants';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    let defaultQueryParams;

    const queryParamSnapshot = this.route.snapshot.queryParamMap;
    if (!queryParamSnapshot.get(toolbarQueryParam)) {
      defaultQueryParams = {
        ...defaultQueryParams,
        [toolbarQueryParam]: 'information'
      };
    }

    if (!queryParamSnapshot.get(settingsPanelQueryParam)) {
      defaultQueryParams = {
        ...defaultQueryParams,
        [settingsPanelQueryParam]: 'large'
      };
    }

    if (!!defaultQueryParams) {
      this.router.navigate([], { queryParams: defaultQueryParams });
    }
  }

  toggleSettingsPanels() {
    const queryParamSnapshot = this.route.snapshot.queryParamMap;
    const currentValue = queryParamSnapshot.get(settingsPanelQueryParam);
    const newValue = currentValue === 'large' ? 'small' : 'large';
    this.router.navigate([], {
      queryParams: { [settingsPanelQueryParam]: newValue },
      queryParamsHandling: 'merge'
    });
  }

  toggleToolbars() {
    const queryParamSnapshot = this.route.snapshot.queryParamMap;
    const currentValue = queryParamSnapshot.get(toolbarQueryParam);
    const newValue = currentValue === 'information' ? 'actions' : 'information';
    this.router.navigate([], {
      queryParams: { [toolbarQueryParam]: newValue },
      queryParamsHandling: 'merge'
    });
  }
}
