import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent {
  /*
   * Еще один декоратор!
   * @Input обозначает свойство как input параметр компонента.
   * Благодаря ему в компонент можно передавать данные из родительского компонента и использовать внутри текущего компонента
   *
   * Посмотрите как передаются input параметры в файлах:
   *  - cat-fact.component.html
   *  - random-idea.component.html
   *  - random-joke.component.html
   */
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() content: string = '';

  /*
   * Обратите внимания что в классе компонента ничего кроме input параметров нет!
   */
}
