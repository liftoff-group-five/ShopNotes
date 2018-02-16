



import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { LandingComponent } from './landing/landing.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { PatronComponent } from './patron/patron.component'
import { BusinessComponent } from './business/business.component'



const routes: Routes = [
	/* { path: '', component: AppComponent, children: [
		//{ path: ':id', component: Component }
	] } */
	{ path: '', component: LandingComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'patron', component: PatronComponent },
	{ path: 'business', component: BusinessComponent }
]


@NgModule( {
	declarations: [
		LandingComponent,
		LoginComponent,
		RegisterComponent,
		PatronComponent,
		BusinessComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot( routes )
	],
	exports: [
		RouterModule
	]
} )


export class RouteModule {  }



