import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfoCardModule } from '../info-card/info-card.module';
import { CatFactDatasourceService } from './cat-fact-datasource.service';
import { CatFactComponent } from './cat-fact.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, InfoCardModule],
  providers: [CatFactDatasourceService],
  declarations: [CatFactComponent],
  exports: [CatFactComponent],
})
export class CatFactModule {}
