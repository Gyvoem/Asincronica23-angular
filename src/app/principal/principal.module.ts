import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstilosAngMaterialComponent } from './estilos-ang-material/estilos-ang-material.component';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    EstilosAngMaterialComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,        
    MatProgressSpinnerModule,
    MatListModule,    
    MatProgressBarModule,
    MatChipsModule,    
  ],
   exports:[
    EstilosAngMaterialComponent,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,        
    MatProgressSpinnerModule,
    MatListModule,    
    MatProgressBarModule,
    MatChipsModule,    
   ]
})
export class PrincipalModule { }
