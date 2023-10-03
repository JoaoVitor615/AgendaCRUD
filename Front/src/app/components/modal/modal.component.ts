import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() showModal: boolean;
  @Input() texto: string;

  constructor(private router: Router){

  }

  navigateHome() {
    this.router.navigate(['']);
  }

}
