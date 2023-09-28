from django.db import models

from . import Property


class PropertyCoordinates(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, default=None
    )
    coordinates = models.CharField()
