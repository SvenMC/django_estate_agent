from django.db import models

from utils import ContractType


class Property(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    address = models.CharField(max_length=150)
    description = models.TextField()
    image = models.ImageField(
        blank=True, upload_to=r'images/'
    )
    contract_type = models.IntegerField(choices=ContractType.choices)
