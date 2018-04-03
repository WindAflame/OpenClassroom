export class Post {

    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title: string, content: string, loveIts: number){
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = new Date();
    }

    IncLoveIts() { this.loveIts += 1; }
    DecLoveIts() { this.loveIts -= 1; }

}
