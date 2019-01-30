import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Added imports by Bright

//import { RedditsPage } from './reddits/redditsts'; // Reddits Ts file class imported
import {SettingsPage} from './settings/settings';  // Settings Ts file class imported


@NgModule({
  declarations: [AppComponent,
   // Added by Bright
  // RedditsPage,
   SettingsPage
   //End what Bright added
   ],
   
  entryComponents: [
    // Added by Bright
   // RedditsPage,
    SettingsPage
    //End what Bright added
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
