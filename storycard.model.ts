export class StorycardModel{
    img:string;
    author : string;
    fandom: string;
    tags: string;
    summery: string;
    date: string;
    stats: string;

constructor(img:string,
    author : string,
    fandom: string,
    tags: string,
    summery: string,
    date: string,
    stats: string)
    {

        this.img = img;
        this.author = author;
        this.date = date;
        this.fandom = fandom;
        this.tags = tags;
        this.summery = summery;
        this.stats = summery;

}

}