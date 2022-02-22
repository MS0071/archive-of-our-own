import { Component } from "@angular/core";
import { CatagoryList } from "../mediaCard";
import { mediacardModel } from "../mediaCard.model";

@ Component({
    selector : 'ao3-fandom-page',
    templateUrl : 'Fandom-layout.component.html',
    styleUrls: ['Fandom-layout.component.css']

})
export class FandomLayoutComponent{
CatagoryCards : mediacardModel []= [];

constructor(){
    for (var types of CatagoryList){
        console.log(types);
        this.CatagoryCards.push(types); 
    }
}

}