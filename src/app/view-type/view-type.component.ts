import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-view-type',
  templateUrl: './view-type.component.html',
  styleUrls: ['./view-type.component.css']
})
export class ViewTypeComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  btn_selected: String;
  @Output() selection = new EventEmitter<string>() 

  ngOnInit() {
    this.getView();
  }

  onSelectGrid():void{
    this.btn_selected = 'grid'
    this.selection.emit('grid');
    this.movieService.setView('grid');
  }

  onSelectList():void{
    this.btn_selected = 'list'
    this.selection.emit('list');
    this.movieService.setView('list');
  }

  getView(){
    this.btn_selected=this.movieService.getView();
  }
}
