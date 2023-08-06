from django.http import HttpResponse, HttpRequest
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect


from .models import Property
from .forms import PropertyForm
from .helpers import PaginationBuilder
from utils import ContractType

def index(request):
    return render(request, 'index.html')

def for_rent_index(request: HttpRequest):
    page_obj = PaginationBuilder.build_index_paginator(
        request=request,
        contract_type=ContractType.RENT
    )
    return render(request, 'for_rent_index.html', {'page_obj': page_obj})

def for_sale_index(request: HttpRequest):
    page_obj = PaginationBuilder.build_index_paginator(
        request=request,
        contract_type=ContractType.SELL
    )
    return render(request, 'for_sale_index.html', {'page_obj': page_obj})

def property_detail(request: HttpRequest, id):
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

def login_portal(request: HttpRequest):
    return render(request, 'login_portal.html')
