import { Component, Input } from "@angular/core";

@Component ({
    selector: 'ao3-StoryCard',
    templateUrl: 'storyCard.component.html',
    styleUrls: ['storyCard.component.css']
})
export class StoryCard{
    @Input() img:string;
    @Input() author : string;
    @Input() fandom: string;
    @Input() tags: string;
    @Input() summery: string;
    @Input() date: string;
    @Input() stats: string;
    

    constructor(){
        this.img = "/assets/ficLOGO.png";
        this.author = "Hogwarts Letters and Magic Mirrors by yellita96";
        this.fandom = "Harry Potter - J. K. Rowliowlinng"
        this.tags = "No Archive Warnings Apply, Dudley Dursley/Original Female Character(s), Dudley Dursley, Harry Potter, Original Female Character(s), Post-Battle of Hogwarts";
        this.summery = "Dudley's child gets a letter to Hogwarts cliche";
        this.date = "20 May 2021"
        this.stats = "Language: English Words: 738 Chapters: 1/1 Comments: 3 Kudos: 15 Bookmarks: 2 Hits: 197";
    }

}

