import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

interface ICatFactResponse {
  fact: string;
  length: number;
}

@Injectable()
export class CatFactDatasourceService {
  private apiEndpoint = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) {}

  getFact(): Observable<string> {
    return this.http
      .get<ICatFactResponse>(this.apiEndpoint)
      .pipe(map((response) => response.fact));
  }
}
