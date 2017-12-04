import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class InterpreteService {

	interpretes:any[] = [];

  constructor( public http:Http ) {
  	this.getAllInterpretes();
  }

  public getAllInterpretes(){
  	this.http.get("https://purofolklore-3368c.firebaseio.com/interpretes.json")
  			.subscribe( data=>{
  				console.log(data.json());
  				this.interpretes = data.json();
  			});
  }

}
