export class Review {

    artistName: string;
    albumName: string;
    albumScore: number;
    albumArt: string;

    constructor(artistName: string, albumName: string, albumScore: number, albumArt:string){
        this.artistName = artistName;
        this.albumName = albumName;
        this.albumScore = albumScore || 0;
        this.albumArt = albumArt;
    }

    scoreUp(){
        let num:any = this.albumScore;
        num += 0.1;
        num = parseFloat(num.toFixed(2));
        if(num < 10){
            this.albumScore = num;
        } else if(num === 10){
            this.albumScore = 10;
        }
    }

    scoreDown(){
        let num:any = this.albumScore;
        num -= 0.1;
        num = parseFloat(num.toFixed(2));
        if(num > 0){
            this.albumScore = num;
        } else if(num === 0){
            this.albumScore = 0;
        }
    }

}
