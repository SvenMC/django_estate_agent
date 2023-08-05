from django.http import HttpResponse, HttpRequest
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect


from .models import Property
from .forms import PropertyForm

def index(request):
    return render(request, 'index.html')

def for_rent_index(request):
    return render(request, 'for_rent_index.html')

def for_sale_index(request):
    return render(request, 'for_sale_index.html')

def property_detail(request):
    return render(request, 'property_detail.html')

@login_required(login_url="/admin/login/")
@csrf_protect
def property_form(request: HttpRequest):

    if request.method == "POST":
        form = PropertyForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = PropertyForm()
    return render(request, "property_form.html", {'form': form})

def login_portal(request):
    return render(request, 'login_portal.html')
