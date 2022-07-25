import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from './cabecalho.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,RouterModule,MatToolbarModule,MatButtonModule,MatIconModule,MatCardModule
  ],
  exports: [CabecalhoComponent]
})
export class CabecalhoModule { }
