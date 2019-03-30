import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatCheckboxModule, MatCardModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatCardModule
  ]
})
export class CustomMaterialModule { }
