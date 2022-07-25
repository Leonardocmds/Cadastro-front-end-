import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatCardModule,MatSliderModule,MatToolbarModule,MatIconModule, MatButtonModule,RouterModule
  ],
  exports:[ClientesComponent]
})
export class ClientesModule { }
