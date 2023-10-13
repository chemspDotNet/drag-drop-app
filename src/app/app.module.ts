import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/dragdrop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DrapDropPrimengComponent } from './drap-drop-primeng/drap-drop-primeng.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    DrapDropPrimengComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   SliderModule,
   DragDropModule,
   FormsModule,
   BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
