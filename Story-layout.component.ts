import { Component } from "@angular/core";
import { StorycardModel } from "./storycard.model";
import { storyList } from "./Storylist";


 

@Component({
    selector: 'ao3-Story-Layout',
    templateUrl: 'Story-layout.component.html',
    styleUrls: ['Story-layout.component.css']
})
export class StoryLayoutComponent{
    Stories: StorycardModel [] = [];

    constructor(){
      for (var fic of storyList){
        console.log(fic);
        this.Stories.push(fic);
  
      }
  
  
    }

}
