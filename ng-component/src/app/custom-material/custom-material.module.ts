import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatPaginator} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatCheckboxModule, MatCardModule, MatPaginatorModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatCardModule, MatPaginatorModule
  ]
})
export class CustomMaterialModule { }
