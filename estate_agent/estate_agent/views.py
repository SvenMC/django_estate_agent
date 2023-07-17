from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def for_rent_index(request):
    return render(request, 'for_rent_index.html')

def for_sale_index(request):
    return render(request, 'for_sale_index.html')

def property_detail(request):
    return render(request, 'property_detail.html')

@login_required(login_url="/admin/login/")
def property_form(request):
    return render(request, 'property_form.html')

def login_portal(request):
    return render(request, 'login_portal.html')
