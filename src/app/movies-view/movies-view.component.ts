import { Component, OnInit, Input} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService }  from '../movie.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.css']
})
export class MoviesViewComponent implements OnInit {

  //Name of the subcomponent to router 
  @Input() mo: Movie[];
  
  constructor(private movieService: MovieService){}
  

  ngOnInit() {
    
  } 
  

}

