import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../movie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {

  @Input()myAuthor;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  //Back button 
  goBack(): void {
    this.location.back();
  }

}
