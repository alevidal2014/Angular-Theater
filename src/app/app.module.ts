import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';


import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MoviesViewComponent } from './movies-view/movies-view.component';
import { ScrollEventModule } from 'ngx-scroll-event';
import { ViewTypeComponent } from './view-type/view-type.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { ShowRelatedComponent } from './show-related/show-related.component';
import { } from "angular-ui-carousel";
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ShowAuthorComponent } from './show-author/show-author.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    PopularComponent,
    TopRatedComponent,
    MovieSearchComponent,
    MoviesViewComponent,
    ViewTypeComponent,
    ViewListComponent,
    ShowMovieComponent,
    ShowRelatedComponent,
    AuthorDetailComponent,
    ShowAuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FlexLayoutModule,
    MatTooltipModule,
    ScrollEventModule,    
  ],
  providers: [MovieService],  //Add the new service to the list of providers 
  bootstrap: [AppComponent]
})
export class AppModule { }
