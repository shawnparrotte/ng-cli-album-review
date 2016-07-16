import { Component, OnInit } from '@angular/core';
import { Review } from '../review.model';


@Component({
  moduleId: module.id,
  selector: 'app-album',
  host: {
    class: 'review'
  },
  inputs: ['review'],
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.css']
})
export class AlbumComponent implements OnInit {

  review: Review;

  constructor() {}

  ngOnInit() {}

  scoreUp():boolean{
    this.review.scoreUp();
    return false;
  }

  scoreDown():boolean{
    this.review.scoreDown();
    return false;
  }

}
