import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomJokeComponent } from './random-joke.component';
import { JokeDataourceService } from './joke-dataource.service';
import { InfoCardModule } from '../info-card/info-card.module';

@NgModule({
  imports: [CommonModule, InfoCardModule],
  declarations: [RandomJokeComponent],
  exports: [RandomJokeComponent],
  providers: [JokeDataourceService],
})
export class RandomJokeModule {}
