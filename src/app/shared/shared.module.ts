import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MatUiModule } from './mat-ui.module';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatUiModule
  ],
  exports: [SearchComponent]
})
export class SharedModule { }
