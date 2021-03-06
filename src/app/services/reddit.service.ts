// File created manually by Bright
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class RedditService{
    http:any;
    baseUrl:String;

    constructor(http:HttpClient){
        this.http = http;
        this.baseUrl = "https://www.reddit.com/r";
    }

    getPosts(category, limit){
        return this.http.get(this.baseUrl+"/"+category+"/top.json?limit="+limit)
         .pipe(
            map(res => JSON.stringify(res))
         ) 
    }
}
