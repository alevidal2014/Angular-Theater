import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  //List of movies
 
 movies$: Observable<Movie[]> ;
  
 //Movie Service injection 
  constructor(private movieService: MovieService) { }
 
  ngOnInit() {
    //When initialized the component this function will call the service to get the data into movies property
    this.getMovies();
     }

     onSearchChange(term : string){
       this.movies$ = this.movieService.searchMovies(term);
     }
 
  
  //Function to retrieve the heroes from the service
  //it waits for the Observable to emit the array of movies
  getMovies(): void {
    this.movies$ = this.movieService.getMovies()
  }  
}