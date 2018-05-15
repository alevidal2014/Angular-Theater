import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-show-related',
  templateUrl: './show-related.component.html',
  styleUrls: ['./show-related.component.css']
})
export class ShowRelatedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() related: Movie[];
}
