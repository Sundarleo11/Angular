import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  //aliasing
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();
  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
    // this.change.emit(this.isFavorite);
    this.change.emit({ newValue: this.isFavorite });
  }
  ngOnInit() {
  }

}
export interface myfav {
  newValue: boolean;
}
