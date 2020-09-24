import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchuelerService } from '../vs_schueler_data/schueler.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [VsSchuelerTableListModule],
  providers: [SchuelerService]
})
export class VsSchuelerTableListModule { }
