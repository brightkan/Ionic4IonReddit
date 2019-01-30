//This file was created manually by Bright
import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {RedditService} from '../services/reddit.service';
import {DetailsPage } from './details';
@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html',
})

export class RedditsPage {
    items:any;
    
    constructor(public navCtrl:NavController,private redditService:RedditService){
     
     }

    ngOnInit(){
      //On App rload these functions are called
      this.getPosts('sports', 5)
    }

    getPosts(category, limit){    
        this.redditService.getPosts(category,limit).subscribe(res =>{
          let response = JSON.parse(res);
          this.items = response.data.children;
        })
    }

    // viewItem(item){
    //     this.navCtrl.goForward(DetailsPage, {
    //       item: item
    //     })
    // }
    
    viewItem(item){
      this.navCtrl.navigateForward( DetailsPage, {
          item: item
      
  })
}