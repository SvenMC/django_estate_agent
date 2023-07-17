from django.http import HttpResponse


def index(request):
    return HttpResponse('<h3>Index Page</h3>')

def for_rent_index(request):
    return HttpResponse('<h3>for_rent_index Page</h3>')

def for_sale_index(request):
    return HttpResponse('<h3>for_sale_index Page</h3>')

def property_detail(request):
    return HttpResponse('<h3>property_detail Page</h3>')

def property_form(request):
    return HttpResponse('<h3>property_form Page</h3>')

def login_portal(request):
    return HttpResponse('<h3>login_portal Page</h3>')
