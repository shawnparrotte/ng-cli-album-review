import { Component, OnInit } from '@angular/core';
import { Review } from '../review.model';
import { AlbumComponent } from '../album/album.component';

@Component({
  moduleId: module.id,
  selector: 'app-review',
  templateUrl: 'review.component.html',
  styleUrls: ['review.component.css'],
  directives: [AlbumComponent]
})
export class ReviewComponent implements OnInit {

  reviews: Review[];

  constructor() {
    this.reviews = [
      new Review("Chance the Rapper", "Coloring Book", 9.2, "http://static1.squarespace.com/static/5105d89ee4b0869f6416d903/t/5734fa9fc2ea51b32cf55a6e/1463089833112/"),
    ]
  }

  ngOnInit() {}

  addReview(artistName:HTMLInputElement, albumName:HTMLInputElement, albumScore:HTMLInputElement, albumArt:HTMLInputElement) {
      this.reviews.push(new Review(artistName.value, albumName.value, parseFloat(albumScore.value), albumArt.value));
      artistName.value = '';
      albumName.value = '';
      albumScore.value = '';
      albumArt.value = '';
  }

  reviewsSorted():Review[] {
      return this.reviews.sort((a:Review, b:Review) => b.albumScore - a.albumScore);
  }

}
