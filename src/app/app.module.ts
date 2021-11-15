import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContattiComponent } from './contatti/contatti.component';
import { FiltraContattiComponent } from './filtra-contatti/filtra-contatti.component';
import { NuovoContattoComponent } from './nuovo-contatto/nuovo-contatto.component';
import { ListaContattiComponent } from './lista-contatti/lista-contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    ContattiComponent,
    FiltraContattiComponent,
    NuovoContattoComponent,
    ListaContattiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
