from django.db import models

from utils.enums import ContractType

class Property(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    address = models.CharField(max_length=150)
    description = models.TextField()
    contract_type = models.IntegerChoices(choices=ContractType.choices)