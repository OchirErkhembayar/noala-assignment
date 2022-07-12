import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-fave',
  templateUrl: './fave.component.html',
  styleUrls: ['./fave.component.scss']
})
export class FaveComponent implements OnInit {
  @Input() i: number = 0;
  @Input('foxUrl') foxUrl: string = '';

  @Output() onRemoveFavourite = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  onUnfavourite() {
    this.onRemoveFavourite.emit(this.i);
  }
}
