import {MatButtonModule, MatCheckboxModule,MatIconModule, 
  MatFormFieldModule,MatInputModule,MatSidenavModule,MatToolbarModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatInputModule,MatIconModule,MatFormFieldModule,MatSidenavModule,
    MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule,
    MatInputModule,MatIconModule,MatFormFieldModule,MatSidenavModule,
    MatToolbarModule],
})
export class WlMaterialModule { }
