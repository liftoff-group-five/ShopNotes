



import { Component } from '@angular/core'

import { UrlService } from '../service/url.service'



@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
} )


export class LoginComponent {
	
	constructor( private _url: UrlService ) {  }
	
	
	// Should be replaced by an observable to track changes from UrlService in the future
	switchLoginStatus( loggingIn: boolean) {
		this._url.authenticate( loggingIn )
	}
	
}



