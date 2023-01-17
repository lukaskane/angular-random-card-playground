import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IIdea {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}
@Injectable()
export class IdeaDatasourceService {
  private endpoint = 'https://www.boredapi.com/api/activity';

  constructor(private http: HttpClient) {}

  public getIdea(): Observable<IIdea> {
    return this.http.get<IIdea>(this.endpoint);
  }
}
