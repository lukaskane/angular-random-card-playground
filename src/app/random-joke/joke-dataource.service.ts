import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IJoke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

@Injectable()
export class JokeDataourceService {
  private apiEndpoing = 'https://official-joke-api.appspot.com/random_joke';

  constructor(private http: HttpClient) {}

  public getJoke(): Observable<IJoke> {
    return this.http.get<IJoke>(this.apiEndpoing);
  }
}
