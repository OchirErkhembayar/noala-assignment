import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foxes',
  templateUrl: './foxes.component.html',
  styleUrls: ['./foxes.component.scss']
})
export class FoxesComponent implements OnInit {
  foxes: string[] = ['https://randomfox.ca/images/15.jpg', 'https://randomfox.ca/images/44.jpg', 'https://randomfox.ca/images/32.jpg', 'https://randomfox.ca/images/42.jpg', 'https://randomfox.ca/images/54.jpg'];
  loading: boolean = false;
  error: boolean = false;
  numbers: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

  refresh() {
    this.loading = true;
    this.numbers = this.numbers.map(() => {
      return Math.floor(Math.random() * 100 + 1)
    });
    this.foxes = this.numbers.map(num => {
      return `https://randomfox.ca/images/${num}.jpg`
    });
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  refreshSingle(index: number) {
    const newNum: number = Math.floor(Math.random() * 100 + 1);
    this.foxes[index] = `https://randomfox.ca/images/${newNum}.jpg`
  }

}
