//This file was created manually by Bright
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {RedditService} from '../services/reddit.service';
import { NavigationExtras, Router}  from '@angular/router'


@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html',
})

export class RedditsPage {

    items:any;
    
    constructor(private router:Router,private redditService:RedditService){
     
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

    viewItem(){
        this.router.navigateByUrl('details');
   
    }
}