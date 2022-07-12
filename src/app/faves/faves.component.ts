import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faves',
  templateUrl: './faves.component.html',
  styleUrls: ['./faves.component.scss']
})
export class FavesComponent implements OnInit {
  foxes: string[] = [];
  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    const storedFoxesUnparsed = localStorage.getItem('foxes');
    if (storedFoxesUnparsed) {
      this.foxes = JSON.parse(storedFoxesUnparsed);
    }
    this.loading = false;
  }

  onRemoveFavourite(i: number) {
    const storedFoxes = JSON.parse(localStorage.getItem("foxes")!);
    storedFoxes.splice(i, 1);
    localStorage.setItem("foxes", JSON.stringify(storedFoxes));
    this.foxes = storedFoxes;
  }

  clear() {
    localStorage.removeItem("foxes");
    this.foxes = [];
  }
}
