import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  /**
   * Массив из типов карточек.
   * ['cat-fact' | 'random-joke' | 'random-idea']
   * На основе этого массива отрисовывается список со случайными карточками
   */
  public items: string[] = [];
  public cardType: FormControl = new FormControl('');

  public constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cardType.valueChanges.subscribe(
      (value) => (this.items = this.items.map((item) => value))
    );
  }

  /**
   * Метод вызывается при нажатии на кнопку add random item.
   * - добавляет в массив items случайный элемент взятый из массива possibleItems
   * - можно добавить console.log чтобы посмотреть как изменяется массив items при каждом нажатии
   */
  addRandom(): void {
    let possibleItems = ['cat-fact', 'random-joke', 'random-idea'];
    let index = this.getRandomInt(0, possibleItems.length);
    this.items.push(possibleItems[index]);
  }

  addCertain(): void {
    let cardType = this.cardType.value;

    if (!cardType) return;

    this.items.push(cardType);
    this.cardType.setValue('');
  }

  get certainCardTypeSet(): boolean {
    return !!this.cardType.value;
  }

  /**
   * Метод вызывается при нажатии на кнопку clear
   * - делает массив items пустым, тем самым очищая страницу
   */
  clear(): void {
    interval(200)
      .pipe(
        takeWhile(() => this.items.length > 0),
        map(() => this.items.length - 1)
      )
      .subscribe((lastIndex) => this.items.splice(lastIndex, 1));
  }

  /**
   * Метод возвращает случайное целое число из диапазона [min, max]
   * - приватный метод, не доступен вне этого класса.
   */
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
