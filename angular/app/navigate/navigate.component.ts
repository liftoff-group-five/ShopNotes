



import { Component, OnInit } from '@angular/core'

import { UrlService } from '../service/url.service'



@Component( {
	selector: 'app-navigate',
	templateUrl: './navigate.component.html',
	styleUrls: [ './navigate.component.css' ]
} )


export class NavigateComponent implements OnInit {
	
	private isLoggedIn: boolean = false
	
	
	constructor( private _url: UrlService ) {  }
	
	
	ngOnInit( ) {
		// Setup UrlService's auth subject observable to identify login status changes
		this._url.auth.subscribe( status => {
			this.isLoggedIn = status
			console.log( 'Your login status is ' + status + '!' )
		} )
	}
	
	logout( ) {
		this._url.authenticate( false )
	}
	
}



