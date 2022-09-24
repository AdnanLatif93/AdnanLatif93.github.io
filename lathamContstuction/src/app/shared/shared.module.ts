import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    CardsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardsComponent,
    FlexLayoutModule
  ]
})
export class SharedModule { }
