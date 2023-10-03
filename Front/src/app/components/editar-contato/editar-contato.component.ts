import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Contato from 'src/app/models/Contato';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent {
  contato: Contato = new Contato();
  id: number;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

  }

  onSubmit() {

  }

}
