import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Observable } from "rxjs/Observable";
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

//List of movies 
 movies$: Observable<Movie[]> ;
 view_used: String= 'grid'; 

 //Query param
 searchTerm: string; 
   
 //Movie Service injection 
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }
 
  ngOnInit() {
    //When initialized the component this function will call the service to get the data into movies property
        
    this.route.queryParams
                .subscribe((queryParam: Params)=>{
                  this.searchTerm = queryParam['search_term'];
                  if(this.searchTerm){
                    this.onSearchChange(this.searchTerm);
                    this.getView(); 
                  }else{
                    this.getMovies();
                    this.getView(); 
                  }
                  
                })   
       
     }

     onSearchChange(term : string){
       this.movies$ = this.movieService.searchMovies(term);
     }
     
     onVieChange(view : string){
      this.view_used = view;
      this.movieService.setView(view);      
    } 
    
     getView(){
       this.view_used = this.movieService.getView();
     }
  
  //Function to retrieve the heroes from the service
  //it waits for the Observable to emit the array of movies
  getMovies(): void {
    this.movies$ = this.movieService.getMovies()
  }  
}