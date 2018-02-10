



import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Api } from './data/api'



@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
} )


export class AppComponent {
	
	private welcome: string = 'Hello, world.  You\'re at the cupcakes index... Angularized!!!'
	private api: Api
	
	
	constructor( private _http: HttpClient, private _api: Api ) {
		// Instantiate 'api' class object for capturing backend data
		this.api = _api
	}
	
	
	findDjango( ) {
		// Get data from Django to map to the 'api' object for viewing and log it
		this.getInfo( ).subscribe( data => {
			this.api = data
			console.log( this.api )
		} )
	}
	
	getInfo( ) {
		// Scour the backend for the '/api' route and return the data retrieved
		return this._http.get<Api>( '/api' )
	}
	
}



