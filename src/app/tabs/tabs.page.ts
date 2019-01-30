import { Component } from '@angular/core';

import { RedditsPage } from '../reddits/redditsts';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  //this tells the tabs component which Pages
  // should be tabs root page
  // Added by Bright
  tab1root:any = RedditsPage;
  tab3root:any = SettingsPage;
  
}
