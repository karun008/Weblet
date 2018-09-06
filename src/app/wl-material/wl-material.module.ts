import {MatButtonModule, MatCheckboxModule,MatIconModule, 
  MatFormFieldModule,MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatInputModule,MatIconModule,MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule,
    MatInputModule,MatIconModule,MatFormFieldModule],
})
export class WlMaterialModule { }
