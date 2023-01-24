import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatFactModule } from './cat-fact/cat-fact.module';
import { RandomJokeModule } from './random-joke/random-joke.module';
import { RandomIdeaModule } from './random-idea/random-idea.module';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutPageModule } from './about-page/about-page.module';
import { HomePageModule } from './home-page/home-page.module';

let routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CatFactModule,
    RandomJokeModule,
    RandomIdeaModule,
    AboutPageModule,
    HomePageModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
