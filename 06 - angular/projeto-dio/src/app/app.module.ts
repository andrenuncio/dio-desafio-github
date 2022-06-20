import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './directives/marca-texto.directive';


@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
