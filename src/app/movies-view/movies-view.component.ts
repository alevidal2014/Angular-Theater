import { Component, OnInit, Input, Pipe} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService }  from '../movie.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.css']
})
export class MoviesViewComponent implements OnInit {

  @Input() mo: Movie[]; 
  
  constructor(private movieService: MovieService){
  }
  

  ngOnInit() {
        
  }   
  
  loadImage(index: number): void {
    console.log(this.mo[index].poster_path);
    if(this.mo[index].poster_path === null){
      this.mo[index].poster_path = '../../assets/images/default.png'
    }
    if(this.mo[index].poster_path === null){
      this.mo[index].backdrop_path = '../../assets/images/default.png'
    }
    
  }
  

} 

