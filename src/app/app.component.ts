import { Component } from '@angular/core';

/* Importo los servicios que necesite */
import { InterpreteService } from './service/interprete.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor( public _is:InterpreteService){}
}
