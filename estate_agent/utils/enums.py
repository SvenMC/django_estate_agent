from django.db import models


class ContractType(models.IntegerChoices):
    RENT = 1
    SELL = 2
