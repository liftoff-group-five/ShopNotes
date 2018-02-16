



import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule }   from '@angular/forms'
import { RouteModule } from './app.routing'

import { AppComponent } from './app.component'
import { NavigateComponent } from "./navigate/navigate.component"

import { Api } from './data/api'
import { Business } from './data/business'
import { Message } from './data/message'
import { Patron } from './data/patron'

import { UrlService } from './service/url.service'



@NgModule( {
	declarations: [
		AppComponent,
		NavigateComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouteModule
	],
	providers: [
		Api,
		Business,
		Message,
		Patron,
		UrlService
	],
	bootstrap: [
		AppComponent
	]
} )


export class AppModule {  }


