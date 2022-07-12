import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.scss']
})
export class FoxComponent implements OnInit {
  @Output() refreshSingle = new EventEmitter<number>;
  @Output() onFavourite = new EventEmitter<number>;

  @Input('foxUrl') foxUrl: string = '';
  @Input() i: number = 0;
  constructor() {  }

  ngOnInit(): void {
  }

  onRefresh() {
    this.refreshSingle.emit(this.i);
  }

  onAddFavourite() {
    this.onFavourite.emit(this.i);
  }
}
