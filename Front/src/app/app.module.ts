import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { CriarContatoComponent } from './components/criar-contato/criar-contato.component';
import { EditarContatoComponent } from './components/editar-contato/editar-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CriarContatoComponent,
    EditarContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
