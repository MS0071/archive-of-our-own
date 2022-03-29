import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { StorycardModel } from '../storycard.model';

@Component({
  selector: 'fm-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {

  constructor(public ps : StoryService) { }

  ngOnInit(): void {
  }

  addStory(Story : StorycardModel){
    this.ps.addStory(Story);
  }


}
