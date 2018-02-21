export class Joke {
    punchLine:string;
    punchAns:string;
    isToShowAns:boolean

    constructor(punchLine:string,punchAns:string){
        this.punchLine=punchLine;
        this.punchAns=punchAns;
        this.isToShowAns=true;
    }

    showAns(){
        this.isToShowAns=!this.isToShowAns;
    }
}
