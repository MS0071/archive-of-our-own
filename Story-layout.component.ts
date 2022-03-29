import { Component } from "@angular/core";
import { StoryService } from "../story.service";
import { StorycardModel } from "../storycard.model";
import { storyList } from "../Storylist";



 

@Component({
    selector: 'ao3-Story-Layout',
    templateUrl: 'Story-layout.component.html',
    styleUrls: ['Story-layout.component.css']
})
export class StoryLayoutComponent{
    Stories: StorycardModel [] = [];

    constructor(private storyService: StoryService){
      
    }
    ngOnInit(): void{
      this.storyService.getStory().subscribe((data: StorycardModel []) => {
        console.log("Fetch");
        for (var Story of data){
          console.log(Story);
          this.Stories.push(Story);
        }
      }
      )
    }


}
