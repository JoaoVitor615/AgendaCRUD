import { Component } from '@angular/core';
import axios from 'axios';
import Contato from 'src/app/models/Contato';

@Component({
  selector: 'app-criar-contato',
  templateUrl: './criar-contato.component.html',
  styleUrls: ['./criar-contato.component.scss']
})
export class CriarContatoComponent {
  contato: Contato = new Contato();

  onSubmit() {
    if(this.contato.Nome && this.contato.Telefone){
      axios.post('http://localhost:3000/agenda/inserir-contato', this.contato).then(() => {
        alert("foi")
        //this.showModal = true;
      });
    }
  }

}
