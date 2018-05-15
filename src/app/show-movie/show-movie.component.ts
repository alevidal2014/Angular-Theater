import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../movie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  @Input() myMovie: Movie;
  @Input() myCast: string[];
  
  //Back button 
  goBack(): void {
    this.location.back();
  }

  show(){
    console.log(this.myMovie);
  }

}
