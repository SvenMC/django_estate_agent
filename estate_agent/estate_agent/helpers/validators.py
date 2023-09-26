from django.core.exceptions import ValidationError
from django.conf import settings


def image_file_size_limit(value):
    MB = settings.FILE_SIZE_UPLOAD_LIMIT
    FULL_VALUE = MB * 1024 * 1024

    if value.size > FULL_VALUE:
        raise ValidationError(
            f'File too large. Size should not exceed: {MB} MB. '
            f'Your value was: {round(value.size / 1024 / 1024, 2)}'
        )
