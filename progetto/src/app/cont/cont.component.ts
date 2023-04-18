import { Component, Input } from '@angular/core';
import { Numbers } from '../models/numerber.model';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent {
  @Input() numero : Numbers = new Numbers(0,0);
  vet_n : Numbers[] = [];
  addFavorito(){
    this.vet_n.push(new Numbers(this.numero.tot, this.numero.n_click))
  }

}
