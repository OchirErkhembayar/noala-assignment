import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foxes',
  templateUrl: './foxes.component.html',
  styleUrls: ['./foxes.component.scss']
})
export class FoxesComponent implements OnInit {
  foxes: string[] = [];
  favouriteFoxes: string[] = [];
  loading: boolean = true;
  error: boolean = false;

  constructor() { }

  async ngOnInit(): Promise<void> {
    for (let i = 0; i < 5; i++) {
      const res = await fetch('https://randomfox.ca/floof/');
      let data = await res.json();
      while (this.foxes.includes(data.image)) {
        console.log("Duplicate!");
        const reres = await fetch('https://randomfox.ca/floof/');
        data = await reres.json();
      }
      this.foxes.push(data.image);
    }
    // Fav. foxes
    const storedFoxesUnparsed = localStorage.getItem('foxes');
    if (storedFoxesUnparsed) {
      this.favouriteFoxes = JSON.parse(storedFoxesUnparsed);
    }
    this.loading = false;
  }

  async refresh() {
    this.loading = true;
    this.foxes = [];
    for (let i = 0; i < 5; i++) {
      const res = await fetch('https://randomfox.ca/floof/');
      const data = await res.json();
      this.foxes.push(data.image);
    }
    this.loading = false;
  }

  async refreshSingle(index: number) {
    const res = await fetch('https://randomfox.ca/floof/');
    const data = await res.json();
    this.foxes[index] = data.image;
  }

  onFavourite(index: number) {
    const fox: string = this.foxes[index];
    const storedFoxesUnparsed = localStorage.getItem("foxes");
    if (!storedFoxesUnparsed) {
      const foxes = [fox];
      localStorage.setItem('foxes', JSON.stringify(foxes));
      this.favouriteFoxes.push(fox);
    } else {
      const storedFoxes: string[] = JSON.parse(storedFoxesUnparsed);
      if (storedFoxes.includes(fox)) {
        return console.log(storedFoxes, 'This fox is already in your favourites');
      }
      this.favouriteFoxes.push(fox);
      storedFoxes.push(fox);
      localStorage.setItem('foxes', JSON.stringify(storedFoxes));
    }
    this.refreshSingle(index);
  }
}
