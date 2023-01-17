import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IJoke, JokeDataourceService } from './joke-dataource.service';

@Component({
  selector: 'random-joke',
  templateUrl: './random-joke.component.html',
})
export class RandomJokeComponent implements OnInit {
  public joke: IJoke = null;

  constructor(private datasource: JokeDataourceService) {}

  ngOnInit() {
    this.getJoke();
  }

  getJoke(): void {
    this.datasource.getJoke().subscribe((joke) => (this.joke = joke));
  }
}
