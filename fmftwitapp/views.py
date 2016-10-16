from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import RequestContext, loader
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_protect

def index(request):

    return render(request, "index.html", {})
