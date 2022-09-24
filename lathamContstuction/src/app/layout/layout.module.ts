import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { HeroContanterComponent } from './hero-contanter/hero-contanter.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeroHeaderComponent,
    HeroContanterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HeroHeaderComponent,
    HeroContanterComponent
  ]

})
export class LayoutModule { }
