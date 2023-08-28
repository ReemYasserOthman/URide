import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
