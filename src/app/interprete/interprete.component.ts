import { Component} from '@angular/core';

// Servicios
import { InterpreteService } from '../service/interprete.service';


@Component({
  selector: 'app-interprete',
  templateUrl: './interprete.component.html',
  styleUrls: ['./interprete.component.css']
})
export class InterpreteComponent{

  constructor( public _is:InterpreteService) { }

  ngOnInit() {
  }

}
