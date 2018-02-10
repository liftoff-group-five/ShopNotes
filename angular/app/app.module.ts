



import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'

import { Api } from './data/api'



@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [ Api ],
	bootstrap: [ AppComponent ]
} )


export class AppModule {  }


