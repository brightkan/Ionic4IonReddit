import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Added by Bright
import {RedditsPage} from '../reddits/redditsts';
import { DetailsPage } from '../reddits/details';
// Removed by Bright
//import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: RedditsPage },
      { path: 'details', component: DetailsPage }
    ])
  ],
  declarations: [RedditsPage,DetailsPage]
})
export class Tab1PageModule {}
