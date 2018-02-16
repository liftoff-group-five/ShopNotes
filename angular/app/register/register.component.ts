



import { Component } from '@angular/core'

import { UrlService } from '../service/url.service'



@Component( {
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
} )


export class RegisterComponent {
	
	constructor( private _url: UrlService ) {  }
	
	
	login( userType: string ) {
		this._url.authenticate( true )
		this._url.navigate( userType )
	}
	
}



