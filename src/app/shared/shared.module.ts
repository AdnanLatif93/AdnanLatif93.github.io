import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CardsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CardsComponent,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
