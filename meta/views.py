



from django.shortcuts import render
from django.http import HttpResponse



def index( request ):
	#return HttpResponse( "Hello, world. You're at the cupcakes index." )
	return render( request, 'meta/index.html' )



