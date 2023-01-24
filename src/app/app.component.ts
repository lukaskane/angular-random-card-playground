import { Component } from '@angular/core';

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
export class AppComponent {}
