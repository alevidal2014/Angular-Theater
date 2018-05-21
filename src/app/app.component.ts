import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppRoutingModule }     from './app-routing.module';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  title = 'My Theater';
  isScrolled = false;
    
  // Nav bar demo
    tabLinks: {label: string, link: string}[] = [
    {label: 'All Movies', link: '/movies'},
    {label: 'Popular', link: '/popular'},
    {label: 'Top Rated', link: '/top_rated'},
  ];
  
  public handleScroll(event: ScrollEvent) {
    
    if (!event.isReachingTop) {
        this.isScrolled =true;
    } 

    if (event.isReachingTop) {
      this.isScrolled =false;
    } 
  }
    
}
