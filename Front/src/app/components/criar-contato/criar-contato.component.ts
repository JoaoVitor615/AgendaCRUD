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

  //Inputs do componente modal
  textoModal: string = 'Contato criado com sucesso!';
  showModal: boolean = false;

  onSubmit() {
    if(this.contato.Nome && this.contato.Telefone){
      axios.post('http://localhost:3000/agenda/inserir-contato', this.contato).then(() => {
        this.showModal = true;
      });
    } else {
      alert("Todos os campos devem ser preenchidos!")
    }
  }


  handlePhone(event: any) {
    let input = event.target;
    input.value = this.phoneMask(input.value);
  }

  phoneMask(value: string): string {
    if (!value) return "";
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{2})(\d)/,"($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2");
    return value;
  }

}
