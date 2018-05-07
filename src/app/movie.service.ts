//MovieService to retrive the information of the movies listed in movieList
import { Injectable } from '@angular/core';
import { Movie } from './movie';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

//We need observable to make an asyncrhonic call to get Movies
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { tap } from 'rxjs/operators';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { environment } from '../environments/environment.prod';

@Injectable()
export class MovieService {

  //Url to get all the movies
   private moviesDbUrl = `https://api.themoviedb.org/3/discover/movie?api_key=6dd89994250985b567dcb668c71843c5&primary_release_date.gte=2017-01-01&primary_release_date.lte=2018-04-25&page=2`;  // URL to web api

  //Compose Url to get one specific movie
  private oneMovieUrl1 = 'https://api.themoviedb.org/3/movie/';
  private oneMovieUrl2 = '?api_key=6dd89994250985b567dcb668c71843c5';
  
  //Url to get the popular movies
  private popuilarUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=6dd89994250985b567dcb668c71843c5';

  //Url to get the popular movies
  private topUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=6dd89994250985b567dcb668c71843c5';

  private serchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=6dd89994250985b567dcb668c71843c5&query=';

  private result: Observable<any[]>;
  private movies: any = {};

  
  constructor(private http: Http) {
    
   }

  
  //This fucntion retreives the information of the last release movies 
  getMovies(): Observable<Movie[]> {   
    return this.http.get(this.moviesDbUrl)
                      .map( res=> { 
                        let result = res.json().results.map(item=> {
                          return new Movie(
                            item.vote_count,
                            item.id,
                            item.video,
                            item.vote_average,
                            item.title,
                            item.popularity,
                            item.poster_path,
                            item.original_language,
                            item.original_title,
                            item.genre_ids,
                            item.backdrop_path,
                            item.adult,
                            item.overview,
                            item.release_date
                          );
                        })
                        return result;
    });
  }

  //This fucntion will return the information of one movie to show its details
  getMovie(id: number): Observable<any> {
    return this.http.get(this.oneMovieUrl1 +id +this.oneMovieUrl2).map((res: Response) =>res.json());       
  }

   //This fucntion retreives the popular movies 
   getPopulars(): Observable<any[]> {    
    return this.http.get(this.popuilarUrl).map((res: Response) =>res.json());    
  }

  //This fucntion retreives the top rated movies 
  getTop(): Observable<any[]> {    
    return this.http.get(this.topUrl).map((res: Response) =>res.json());      
  }

  //Method used to perform the search 
  searchMovies(term: string): Observable<Movie[]>{
    
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
      //return this.http.get(this.serchUrl+ term).map((res: Response) =>res.json());      
      return this.http.get(this.serchUrl+ term, {params: term})
                      .map( res=> { 
                        let result = res.json().results.map(item=> {
                          return new Movie(
                            item.vote_count,
                            item.id,
                            item.video,
                            item.vote_average,
                            item.title,
                            item.popularity,
                            item.poster_path,
                            item.original_language,
                            item.original_title,
                            item.genre_ids,
                            item.backdrop_path,
                            item.adult,
                            item.overview,
                            item.release_date
                          );
                        })
                        return result.slice(0,5);
    });
  
  }

  
}