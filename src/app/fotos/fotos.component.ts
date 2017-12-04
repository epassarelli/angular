import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  
  public parametro;

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router
  	){}

  ngOnInit(){
  	this._route.params.forEach((params: Params) => {
  		this.parametro = params['page'];
  	});
  }

}
