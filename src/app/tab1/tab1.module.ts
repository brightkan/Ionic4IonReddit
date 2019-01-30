import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Added by Bright
import {RedditsPage} from '../reddits/redditsts'
// Removed by Bright
//import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RedditsPage }])
  ],
  declarations: [RedditsPage]
})
export class Tab1PageModule {}
