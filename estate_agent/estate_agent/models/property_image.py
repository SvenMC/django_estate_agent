from django.db import models

from . import Property
from ..helpers import image_file_size_limit


class PropertyImage(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, default=None
    )
    image = models.ImageField(
        upload_to=r'images/', validators=[image_file_size_limit]
    )
