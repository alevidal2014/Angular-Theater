export class Movie { 
  
  vote_count: number;
  id:  number;
  video: boolean;
  vote_average: string;
  title: string;
  popularity: number;
  poster_path: string ;
  original_language: string;
  original_title: string;
  genre_ids:number[];
  backdrop_path: string;
  adult:boolean;
  overview: string;
  release_date: string

  constructor(vote_count: number, id:  number, video: boolean, vote_average: string, title: string, popularity: number,
               poster_path: string ,original_language: string, original_title: string, genre_ids:number[],  backdrop_path: string,
                adult:boolean, overview: string, release_date: string){
                  this.vote_count=vote_count;
                  this.id=id;
                  this.video = video;
                  this.vote_average=vote_average;
                  this.title= title;
                  this.popularity = popularity;
                  this.poster_path= poster_path ;
                  this.original_language = original_language;
                  this.original_title = original_language;
                  this.genre_ids = genre_ids;
                  this.backdrop_path = backdrop_path;
                  this.adult=adult;
                  this.overview =overview;
                  this.release_date =release_date;

  }
  }

  