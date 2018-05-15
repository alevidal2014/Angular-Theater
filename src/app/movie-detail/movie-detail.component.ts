//This component will be type input since it will receive the selected movie to display
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";

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
   movie: any;
  cast: any;
  genreList: String[];
  @Input() movie_id: number;
  //related_movies: Movie[]; 
  related_movies$: Observable<Movie[]>
  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) { 
      
      route.params.subscribe(val => {
        this.getMovie();
        this.getCast();
        this.getRelated();
      });
  }

  ngOnInit() {   
    
  }
  
  //Extract the movie id from the url parameters and request the service to get the movie info
  getMovie(): void {
    this.movie_id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(this.movie_id)
      .subscribe(movie => this.movie = movie);     
  }

  getCast(): void {    
    this.movieService.getCast(this.movie_id).subscribe((cast) => this.cast = cast.cast);         
  }

  getRelated() :void { 
    //this.movieService.getRelated(this.movie_id).subscribe((movies) => this.related_movies = movies);
    this.related_movies$ = this.movieService.getRelated(this.movie_id);
  }


  //Back button 
  goBack(): void {
    this.location.back();
  }

  
} 
