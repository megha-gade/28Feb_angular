import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import{MatDialogModule}from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import{MatSortModule}from '@angular/material/sort'
import{MatPaginatorModule}from '@angular/material/paginator'

@NgModule({
declarations: [
AppComponent,
EmpAddEditComponent
],
imports: [
  MatPaginatorModule,
  MatSortModule,
MatTableModule,
HttpClientModule,
ReactiveFormsModule,
MatSelectModule,
MatRadioModule,
MatNativeDateModule,
MatDatepickerModule,
MatInputModule,
MatFormFieldModule,
MatDialogModule,
MatButtonModule,
MatIconModule,
MatToolbarModule,
BrowserModule,
AppRoutingModule
],
providers: [
provideClientHydration(),
provideAnimationsAsync()
],
bootstrap: [AppComponent]
})
export class AppModule { }