import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent }      from './movies/movies.component';
import { MovieDetailComponent }  from './movie-detail/movie-detail.component';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import {AuthorDetailComponent} from './author-detail/author-detail.component'

const routes: Routes = [ 
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'detail/:id/:query', component: MovieDetailComponent },  
  { path: 'popular', component: PopularComponent } ,
  { path: 'top_rated', component: TopRatedComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'author/:id', component: AuthorDetailComponent },  
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}