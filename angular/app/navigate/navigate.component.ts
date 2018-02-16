



import { Component } from '@angular/core'

import { UrlService } from '../service/url.service'



@Component( {
	selector: 'app-navigate',
	templateUrl: './navigate.component.html',
	styleUrls: [ './navigate.component.css' ]
} )


export class NavigateComponent {
	
	constructor( private _url: UrlService ) {  }
	
	
	// Will be moved intp Urlservice s an observable to track changes in the future
	switchLoginStatus( loggingIn: boolean) {
		this._url.authenticate( loggingIn )
	}
	
}



