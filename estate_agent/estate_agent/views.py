from django.http import HttpRequest
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect

from .models import Property
from .forms import PropertyForm
from .helpers import PaginationBuilder
from utils import ContractType
from .map import UrlMap


def index(request: HttpRequest):

    if request.method == 'POST':
        logout(request)

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
    if request.method == "POST":
        property = Property.objects.filter(pk=id).first()

        if 'property_delete' in request.POST:
            property_type = property.contract_type
            property.delete()

            if property_type == ContractType.RENT:
                return redirect(f'/{UrlMap.for_rent_index}')
            else:
                return redirect(f'/{UrlMap.for_sale_index}')
        elif 'property_edit' in request.POST:
            return redirect(f'/{UrlMap.edit_property_form}{property.pk}/')

    else:
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
    return render(request, "property_form.html", {'form': form, 'edit': False})


@login_required(login_url="/admin/login/")
@csrf_protect
def edit_property_form(request: HttpRequest, id):
    # TODO add redirect on id out of range.
    property = Property.objects.filter(pk=id).first()

    if request.method == "POST":
        form = PropertyForm(request.POST, instance=property)
        if form.is_valid():
            instance = form.save()
            return redirect(f'/property/{instance.pk}/')
    else:
        form = PropertyForm(instance=property)

    return render(request, "property_form.html", {'form': form, 'edit': True})


@csrf_protect
def login_portal(request: HttpRequest):
    if request.method == "POST":
        user_email = request.POST['user_email']
        user_password = request.POST['user_password']
        user = authenticate(
            request=request,
            username=user_email,
            password=user_password
        )
        if user is not None:
            login(request, user)
            return redirect('/')

    return render(request, 'login_portal.html')


@csrf_protect
def register_user(request: HttpRequest):
    # TODO Add logic for exiting email and other errors.
    if request.method == "POST":
        user_email = request.POST['user_email']
        user_password = request.POST['user_password']
        user = User.objects.create_user(
            username=user_email,
            password=user_password,
            email=user_email
        )
        user.save()
        if user is not None:
            login(request, user)
            return redirect('/')

    return render(request, 'register_user.html')


@csrf_protect
def user_logout(request: HttpRequest):
    logout(request)

    return render(request, 'index.html')
