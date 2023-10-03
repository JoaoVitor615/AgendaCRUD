import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import Contato from 'src/app/models/Contato';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent {
  contato: Contato = new Contato();
  id: number;

  //Inputs do componente modal
  textoModal: string = 'Alterações salvas!';
  showModal: boolean = false;


  constructor(private route: ActivatedRoute){

  };

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarContato();
  };

  carregarContato(){
    axios.get(`http://localhost:3000/agenda/carregar-contato/${this.id}`).then((res) => {
      this.contato = res.data;
    })
  };

  onSubmit() {
    this.contato.Id = this.id;
    if(this.contato.Nome && this.contato.Telefone){
      axios.put('http://localhost:3000/agenda/editar-contato', this.contato)
      .then(() => {
        this.showModal = true;
      })
      .catch((err) => {
        alert(`Erro: ${err}`)
      });
    } else {
      alert("Todos os campos devem ser preenchidos!")
    }
  };

  //Máscara para número
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
