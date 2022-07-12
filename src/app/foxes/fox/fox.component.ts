import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.scss']
})
export class FoxComponent implements OnInit {
  @Output() refreshSingle = new EventEmitter<number>;

  @Input('foxUrl') foxUrl: string = '';
  constructor() {  }
  @Input() i: number = 0;

  ngOnInit(): void {
  }

  onRefresh() {
    this.refreshSingle.emit(this.i);
  }

}
