import { Component, OnInit } from '@angular/core';
import { IgxToastComponent } from 'igniteui-angular';

@Component({
  selector: 'app-foxes',
  templateUrl: './foxes.component.html',
  styleUrls: ['./foxes.component.scss']
})
export class FoxesComponent implements OnInit {
  foxes: string[] = [];
  loading: boolean = true;
  error: boolean = false;
  hideNotif: boolean = true;
  // Working on this to reset the notification when many favourites are clicked.
  timerId: any;

  constructor() { }

  async ngOnInit(): Promise<void> {
    for (let i = 0; i < 5; i++) {
      const res = await fetch('https://randomfox.ca/floof/');
      if (!res.ok) {
        this.error = true;
        this.loading = false;
        return;
      }
      let data = await res.json();
      while (this.foxes.includes(data.image)) {
        const reres = await fetch('https://randomfox.ca/floof/');
        data = await reres.json();
      }
      this.foxes.push(data.image);
    }
    this.loading = false;
  }

  async refresh() {
    this.error = false;
    this.loading = true;
    this.foxes = [];
    for (let i = 0; i < 5; i++) {
      const res = await fetch('https://randomfox.ca/floof/');
      let data = await res.json();
      while (this.foxes.includes(data.image)) {
        const reres = await fetch('https://randomfox.ca/floof/');
        data = await reres.json();
      }
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
    clearInterval(this.timerId);
    this.hideNotif = false;
    const fox: string = this.foxes[index];
    const storedFoxesUnparsed = localStorage.getItem("foxes");
    if (!storedFoxesUnparsed) {
      const foxes = [fox];
      localStorage.setItem('foxes', JSON.stringify(foxes));
    } else {
      const storedFoxes: string[] = JSON.parse(storedFoxesUnparsed);
      if (storedFoxes.includes(fox)) {
        this.hideNotif = true;
        return;
      }
      storedFoxes.push(fox);
      localStorage.setItem('foxes', JSON.stringify(storedFoxes));
    }
    this.refreshSingle(index);
    this.timerId = setInterval(() => {
      this.hideNotif = true;
    }, 2000);
  }
}
