import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchuelerFormComponent } from './schueler-form/schueler-form.component';
import { VsSchuelerTableListComponent } from './vs-schueler-table-list/vs-schueler-table-list.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
