import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@NgModule({
  declarations: [AppComponent, ModalComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    NgxMatTimepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
