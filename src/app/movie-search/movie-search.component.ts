import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchField: FormControl; 

  constructor(private movieService: MovieService, private route: Router) { }
    
 ngOnInit(): void {
    
  this.searchField =new FormControl(); 
  
  this.searchField.valueChanges
                  .debounceTime(300)    
                  .distinctUntilChanged()
                  .subscribe( term => {this.route.navigate(['/movies'], {queryParams: {search_term: term}});}) 
    
    }
}
