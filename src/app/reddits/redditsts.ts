//This file was created manually by Bright
import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {RedditService} from '../services/reddit.service';
@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html',
  
  
})
export class RedditsPage {

    constructor(navCtrl:NavController,private redditService:RedditService){
     
     }

    ngOnInit(){
      //On App rload these functions are called
      this.getPosts('sports', 5)
    }

    getPosts(category, limit){
      try {
        this.redditService.getPosts(category,limit).subscribe(res =>{
          console.log(res)
        })
        
      } catch (error) {
        console.log("No internet Access")
      }
 
    }
    
}