import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//PrimeNG
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { CdkTableModule } from '@angular/cdk/table';
import { A11yModule } from '@angular/cdk/a11y';
import {MatTableModule} from '@angular/material/table'; 

// Privat
import { AppComponent } from './app.component';
import { VsListViewComponent } from './vs-list-view/vs-list-view.component';
import { VsSchuelerTableListComponent } from './vs-schueler-table-list/vs-schueler-table-list.component';
import { SchuelerFormComponent } from './schueler-form/schueler-form.component';
import { SchuelerModelService } from './vs_schueler_data/generic-http/schueler-model.service';


@NgModule({
  declarations: [
    AppComponent,
    VsListViewComponent,
    VsSchuelerTableListComponent,
    SchuelerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    RouterModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    CdkTableModule,
    A11yModule,
    MatTableModule,
    FormsModule,
    ToolbarModule,
    ConfirmDialogModule
    
  ],
  providers: [ConfirmationService, MessageService, SchuelerModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
