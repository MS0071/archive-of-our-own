
import { Injectable } from "@angular/core";
import { StorycardModel } from "./storycard.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})

export class StoryService {

    constructor (private db:AngularFireDatabase){

    }
    public getStory(){
        return this.db.list<StorycardModel>("stories").valueChanges();
       }

    public getStorys(index: number){

    }
}