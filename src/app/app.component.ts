import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, takeWhile, map } from 'rxjs';

/* @Component - Данный декоратор обозначает класс как Angular Component, с соответсвующими метаданными
 * в данном случае указаны следующие метаданные: */
@Component({
  /* selector - указывает на название html-элемента с помощью которого этот компонент может быть отрисован.
   * в файле app.component.html есть элемент cat-fact.
   * Если открыть файл cat-fact.component.ts который находится в папке src/app/cat-fact то там можно увидеть значение селектора равному 'cat-fact'
   */
  selector: 'my-app',

  /* templateUrl - указывает на файл который отвечает за view.
   * содержит html код необходимый для отрисовки данного компонента. */
  templateUrl: './app.component.html',

  /* styleUrls - указывает на файл который отвечает за стилизацию компонента*/
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * Массив из типов карточек.
   * ['cat-fact' | 'random-joke' | 'random-idea']
   * На основе этого массива отрисовывается список со случайными карточками
   */
  public items: string[] = [];
  public cardType: FormControl = new FormControl('');

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
