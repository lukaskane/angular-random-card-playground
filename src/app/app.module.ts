import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatFactModule } from './cat-fact/cat-fact.module';
import { RandomJokeModule } from './random-joke/random-joke.module';
import { RandomIdeaModule } from './random-idea/random-idea.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CatFactModule,
    RandomJokeModule,
    RandomIdeaModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
