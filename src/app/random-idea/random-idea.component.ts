import { Component, OnInit } from '@angular/core';
import { IdeaDatasourceService, IIdea } from './idea-datasource.service';

@Component({
  selector: 'random-idea',
  templateUrl: './random-idea.component.html',
})
export class RandomIdeaComponent implements OnInit {
  public idea: IIdea = null;

  constructor(private datasource: IdeaDatasourceService) {}

  ngOnInit() {
    this.getIdea();
  }

  private getIdea(): void {
    this.datasource.getIdea().subscribe((idea) => (this.idea = idea));
  }
}
