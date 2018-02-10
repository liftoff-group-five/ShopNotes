



from django.shortcuts import render
from django.http import HttpResponse



## Render Angular's component templates instead as the web app's frontend view
def index( request ):
	return render( request, 'meta/index.html' )

## Showcase front and backend frameworks' integration with an api returning json
def api( request ):
	app = 'cupcakes'
	return HttpResponse( '{ "name": "' + app + '", "program": "LaunchCode", "city": "Seattle", "reaction": "WOW!!!" }' )


