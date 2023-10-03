import { Component } from '@angular/core';
import axios from 'axios';
import Contato from 'src/app/models/Contato';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  listaContatos: Contato[]; //Recebe a lista de contatos da API
  showModal: boolean; //True ou False para mostrar ou esconder o modal de excluir
  idDelete: number;

  ngOnInit() {
    this.listarContatos()
    this.showModal = false;

  };

  //Requisição dos contatos da API e inserção dos contatos no array
  listarContatos(){
    axios.get('http://localhost:3000/agenda/listar-contatos').then((res) => {
      this.listaContatos = res.data;
    })
  };

  //Mudar o boolean do Modal
  toggleModal() {
    this.showModal = !this.showModal;
  }

  //Passa o id a ser deletado
  toggleModalId(id: number) {
    this.toggleModal()
    this.idDelete = id;
  }

  //Excluir contato do Front e do BD
  excluir() {
    axios.delete(`http://localhost:3000/agenda/deletar-contato/${this.idDelete}`).then(() => {
      this.listaContatos = this.listaContatos.filter((contato) => contato.Id !== this.idDelete)
    });

    this.toggleModal()
  }

  //Editar contato
  editContato(Id: number) {

  }

}
