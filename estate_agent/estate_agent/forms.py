from django.forms import ModelForm
from django import forms
from django.forms import ClearableFileInput

from .models import Property, PropertyImage


class PropertyForm(ModelForm):
    class Meta:
        model = Property
        exclude = ["created_at", "last_updated"]


class MultipleFileInput(ClearableFileInput):
    allow_multiple_selected = True


class PropertyImageForm(ModelForm):
    class Meta:
        model = PropertyImage
        fields = ['image']
        widgets = {
            'image': MultipleFileInput()
        }
