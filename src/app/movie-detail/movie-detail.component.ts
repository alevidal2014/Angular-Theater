//This component will be type input since it will receive the selected movie to display
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService }  from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  //This property is espected to be received by the parent component 
  @Input() movie: any;
  genreList: String[];
  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) {   
  }

  ngOnInit() {
    
    this.getMovie();
    
  }
  
  //Extract the movie id from the url parameters and request the service to get the movie info
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);     
  }

  getGenres(): void {
       
  }

  //Back button 
  goBack(): void {
    this.location.back();
  }

}
