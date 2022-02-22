import { Component, Input } from "@angular/core";

@Component ({
    selector: 'ao3-MediaCard',
    templateUrl: 'mediaCard.component.html',
    styleUrls: ['mediaCard.component.css']
})
export class MediaCard{
    @Input()
    typeofMedia!: string;

    @Input()
    typeofMedia2!: string;

    @Input() title1!: string;
    @Input() title2!: string;
    @Input() title3!: string;
    @Input() title4!: string;
    @Input() title5!: string;

    @Input() title12!: string;
    @Input() title22!: string;
    @Input() title32!: string;
    @Input() title42!: string;
    @Input() title52!: string;
   

}