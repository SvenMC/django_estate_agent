from django.forms import ModelForm
from .models import Property


class PropertyForm(ModelForm):
    class Meta:
        model = Property
        exclude = ["created_at", "last_updated"]
