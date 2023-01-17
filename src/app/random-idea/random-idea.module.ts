import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardModule } from '../info-card/info-card.module';
import { RandomIdeaComponent } from './random-idea.component';
import { IdeaDatasourceService } from './idea-datasource.service';

@NgModule({
  imports: [CommonModule, InfoCardModule],
  providers: [IdeaDatasourceService],
  declarations: [RandomIdeaComponent],
  exports: [RandomIdeaComponent],
})
export class RandomIdeaModule {}
