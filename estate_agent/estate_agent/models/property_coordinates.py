from django.db import models

from . import Property


class PropertyCoordinates(models.Model):
    property = models.OneToOneField(
        Property, on_delete=models.CASCADE, default=None
    )
    longitude = models.FloatField(
        null=True,
        default=None
    )
    latitude = models.FloatField(
        null=True,
        default=None
    )
