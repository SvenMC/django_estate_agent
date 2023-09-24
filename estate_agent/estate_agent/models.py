from django.db import models

from utils import ContractType
from .helpers import image_file_size_limit


class Property(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    address = models.CharField(max_length=150)
    description = models.TextField()
    contract_type = models.IntegerField(choices=ContractType.choices)


class PropertyImage(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, default=None
    )
    image = models.ImageField(
        upload_to=r'images/', validators=[image_file_size_limit]
    )
