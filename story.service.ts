
import { Injectable } from "@angular/core";
import { StorycardModel } from "./storycard.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})

export class StoryService {

    constructor (private db:AngularFireDatabase){

    }
     getStory(){
        return this.db.list<StorycardModel>("Stories").valueChanges();
       }

    getStorys(index: number){

    }

    addStory (Story : StorycardModel){
        this.db.list<StorycardModel>("Stories").push(Story);
    }
}