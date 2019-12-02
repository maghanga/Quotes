export class Quote {
    showDetail: boolean;
    constructor(public id: number,public name: string, public author: string, public publisher: string, public timeSince: Date, public upVotes:number, public downVotes:number){
        this.showDetail = false;
    }
    
}
