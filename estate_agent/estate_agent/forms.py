from django.forms import ModelForm
from django.forms import ClearableFileInput

from .models import Property, PropertyImage


class PropertyForm(ModelForm):
    class Meta:
        model = Property
        exclude = ["created_at", "last_updated"]


class PropertyImageForm(ModelForm):
    class Meta:
        model = PropertyImage
        fields = ['image']
