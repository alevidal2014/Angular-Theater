import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

 //List of movies
 movies: any = {};

 //Movie Service injection 
 constructor(private movieService: MovieService) { }

 ngOnInit() {
   //When initialized the component this function will call the service to get the data into movies property
   this.getTopRated();   
 }

 
 //Function to retrieve the heroes from the service
 //it waits for the Observable to emit the array of top rated movies
 getTopRated(): void {    
   this.movieService.getTop().subscribe(movies=>this.movies=movies);   
 }
}
