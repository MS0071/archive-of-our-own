import { Component } from '@angular/core';
import { storyList } from './Story/Storylist';
import { StorycardModel } from './Story/storycard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ao3-page';
  Stories: StorycardModel [] = [];

  constructor(){
    for (var fic of storyList){
      console.log(fic);
      this.Stories.push(fic);

    }


  }


}