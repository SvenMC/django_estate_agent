from django.http import HttpResponse, HttpRequest
from django.forms import modelformset_factory, modelform_factory
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
    PropertyFormset = modelformset_factory(Property, exclude=["created_at", "last_updated"])

    if request.method == "POST":
        formset = PropertyFormset(request.POST, request.FILES)
        if formset.is_valid():
            formset.save()
    else:
        formset = PropertyFormset()
    return render(request, "property_form.html", {'form':formset})

def login_portal(request):
    return render(request, 'login_portal.html')
