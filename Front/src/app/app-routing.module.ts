import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { CriarContatoComponent } from './components/criar-contato/criar-contato.component';
import { EditarContatoComponent } from './components/editar-contato/editar-contato.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'criar-contato', component: CriarContatoComponent},
  {path: 'editar-contato/:id', component: EditarContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
