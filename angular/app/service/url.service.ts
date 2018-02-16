



import { Injectable } from '@angular/core'
import { Router } from '@angular/router'



@Injectable( )


export class UrlService {
	
	private isLoggedIn: boolean = false
	

	constructor( ) {  }
	
	
	authenticate( loggingIn: boolean ) {
		this.isLoggedIn = loggingIn
	}

}


