



import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Subject } from 'rxjs/Subject'



@Injectable( )


export class UrlService {
	
	public auth: Subject<boolean> = new Subject
	

	constructor( private _navigate: Router ) {  }
	
	
	authenticate( loggingIn: boolean ) {
		// Pass new boolean to alter user login status
		this.auth.next( loggingIn )
	}
	
	navigate( url: string ) {
		this._navigate.navigate( [ url ] )
	}

}


