import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService }  from '../movie.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  author: any;
  author_id: number;
  related_movies$: Observable<Movie[]>

  constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) { }

  ngOnInit() {
    this.getAuthor(); 
    this.getRelated(); 
  }

  getAuthor(): void {
    this.author_id = +this.route.snapshot.paramMap.get('id');    
    this.movieService.getAuthor(this.author_id)
       .subscribe(author => this.author = author);     
  }

  getRelated() :void { 
    //this.movieService.getRelated(this.movie_id).subscribe((movies) => this.related_movies = movies);
    this.related_movies$ = this.movieService.getmoviesByCast(this.author_id);
  }

}
