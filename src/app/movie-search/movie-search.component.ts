import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movies$: Observable<Movie[]>;
   private searchTerms = new Subject<string>();

  @Output() textChanged = new EventEmitter<string>()

  constructor(private movieService: MovieService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    
    this.searchTerms.next(term);
    //console.log(this.movies$);
  }
  
 ngOnInit(): void {
    
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes      
      // switchMap((term: string) => this.movieService.searchMovies(term))            
    ).subscribe( (text : string) =>{
      this.textChanged.emit(text);
    }
    );
    
      }
}
