



import { Component } from '@angular/core'

import { UrlService } from '../service/url.service'



@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
} )


export class LoginComponent {
	
	constructor( private _url: UrlService ) {  }
	
	
	login( userType: string ) {
		this._url.authenticate( true )
		this._url.navigate( userType )
	}
	
}



