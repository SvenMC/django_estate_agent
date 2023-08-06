from django.http import HttpResponse, HttpRequest
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect


from .models import Property
from .forms import PropertyForm

def index(request):
    return render(request, 'index.html')

def for_rent_index(request):
    properties = Property.objects.filter(contract_type=1)
    return render(request, 'for_rent_index.html', {'properties': properties})

def for_sale_index(request):
    properties = Property.objects.filter(contract_type=2)
    return render(request, 'for_sale_index.html', {'properties': properties})

def property_detail(request, id):
    property = Property.objects.get(id=id)
    return render(request, 'property_detail.html', {'property': property})

@login_required(login_url="/admin/login/")
@csrf_protect
def property_form(request: HttpRequest):

    if request.method == "POST":
        form = PropertyForm(request.POST)
        if form.is_valid():
            instance = form.save()
            return redirect(f'/property/{instance.pk}/')
    else:
        form = PropertyForm()
    return render(request, "property_form.html", {'form': form})

def login_portal(request):
    return render(request, 'login_portal.html')
