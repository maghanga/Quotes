export class Quote {
    showDetail: boolean;
    constructor(public id: number,public name: string, public author: string, public publisher: string){
        this.showDetail = false;
    }
    
}
