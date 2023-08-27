"""
URL configuration for estate_agent project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from . import views
from .map import UrlMap

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'properties', views.PropertiesViewSet)



urlpatterns = [
    path('admin/', admin.site.urls),
    #
    path('', views.index, name='index'),
    path(UrlMap.for_rent_index, views.for_rent_index, name='for_rent_index'),
    path(UrlMap.for_sale_index, views.for_sale_index, name='for_sale_index'),
    path(
        f'{UrlMap.property_detail}<str:id>/',
        views.property_detail,
        name='property_detail'
    ),
    path(UrlMap.property_form, views.property_form, name='property_form'),
    path(
        f'{UrlMap.property_form}<str:id>/',
        views.edit_property_form,
        name='edit_property_form'
    ),
    path(UrlMap.login_portal, views.login_portal, name='login_portal'),
    path(UrlMap.register_user, views.register_user, name='register_user'),
    path(UrlMap.user_logout, views.user_logout, name='logout'),

    # API
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
