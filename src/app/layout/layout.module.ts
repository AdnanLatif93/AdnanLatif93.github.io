import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { HeroContanterComponent } from './hero-contanter/hero-contanter.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeroHeaderComponent,
    HeroContanterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports:[
    HeroHeaderComponent,
    HeroContanterComponent,
    FooterComponent,
  ]

})
export class LayoutModule { }
