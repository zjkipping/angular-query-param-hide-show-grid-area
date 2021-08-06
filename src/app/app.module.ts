import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { ActionsToolbarComponent } from './ui/actions-toolbar/actions-toolbar.component';
import { InformationComponent } from './ui/information/information.component';
import { LargeSettingsPanelComponent } from './ui/large-settings-panel/large-settings-panel.component';
import { SmallSettingsPanelComponent } from './ui/small-settings-panel/small-settings-panel.component';
import { StatusesComponent } from './ui/statuses/statuses.component';
import { TitleComponent } from './ui/title/title.component';
import { UserControlComponent } from './ui/user-control/user-control.component';

const routes = [
  {
    path: 'feature',
    component: FeatureComponent
  },
  { path: '**', redirectTo: 'feature' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    FeatureComponent,
    TitleComponent,
    InformationComponent,
    SmallSettingsPanelComponent,
    LargeSettingsPanelComponent,
    ActionsToolbarComponent,
    UserControlComponent,
    StatusesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
