



import { Component } from '@angular/core'

import { UrlService } from '../service/url.service'



@Component( {
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
} )


export class RegisterComponent {
	
	constructor( private _url: UrlService ) {  }
	
	
	// Should be replaced by an observable to track changes from UrlService in the future
	switchLoginStatus( loggingIn: boolean) {
		this._url.authenticate( loggingIn )
	}
	
}



