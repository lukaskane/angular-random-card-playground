import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page.component';
import { CatFactModule } from '../cat-fact/cat-fact.module';
import { RandomJokeModule } from '../random-joke/random-joke.module';
import { RandomIdeaModule } from '../random-idea/random-idea.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CatFactModule,
    RandomJokeModule,
    RandomIdeaModule,
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
