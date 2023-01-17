import { Component, OnInit } from '@angular/core';
import { CatFactDatasourceService } from './cat-fact-datasource.service';

@Component({
  selector: 'cat-fact',
  templateUrl: './cat-fact.component.html',
})
export class CatFactComponent implements OnInit {
  public fact: string = '';

  constructor(
    /*
      в данной строке мы внедряем зависимость от сервиса CatFactDatasourceService
      подробнее про внедрение зависимостей можно прочитать тут:
      https://metanit.com/web/angular2/4.1.php
    */
    private datasource: CatFactDatasourceService
  ) {}

  /*

    Данный метод вызывается при первой инициализации компонента!
    
    ngOnInit один из методов Angular Hooks
    подробнее можно почитать тут:
    https://metanit.com/web/angular2/2.8.php

    Обратите внимание на самые популярные: 
    - ngOnInit
    - ngOnChanges
    - ngOnDestroy 
  */
  ngOnInit() {
    this.getFact();
  }

  /*
    Данный метод возвращает найденный в интернете случайный факт про котов.
    Используется сервис CatFactDatasourceService
  */
  public getFact(): void {
    /*
      Метод subscribe предоставляется объектом Observable который вызвращает метов getFacts сервиса CatFactDatasourceService
      CatFactDatasourceService
      - getFact
      -- Observable
      --- subscribe

      Для более полной информации нужно изучить библиотеку rxjs
      Я в свое время смотрел данное видео:
      https://www.youtube.com/watch?v=3rEDHnqn-Cw&ab_channel=MoscowJS

      вы можете поискать что нибудь еще, в youtube много туториалов
     */
    this.datasource.getFact().subscribe((fact) => (this.fact = fact));
  }
}
