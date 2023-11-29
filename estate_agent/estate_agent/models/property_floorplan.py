from django.db import models

from . import Property
from ..helpers import image_file_size_limit


class PropertyFloorplan(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, default=None
    )
    floorplan = models.ImageField(
        upload_to=r'floorplans/', validators=[image_file_size_limit]
    )
