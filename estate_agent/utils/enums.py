from django.db import models


class PropertyContractType(models.TextChoices):
    RENT = 'RENT', 'Rent'
    BUY = 'BUY', 'Buy'


class PropertyStatus(models.TextChoices):
    AVAILABLE = 'AVAILABLE', 'Available'
    SOLD = 'SOLD', 'Sold'
    DELISTED = 'DELISTED', 'Delisted'


class PropertyPaymentSchedule(models.TextChoices):
    MONTHLY = 'MONTHLY', 'Monthly'
    WEEKLY = 'WEEKLY', 'Weekly'


class PropertyTenure(models.TextChoices):
    LEASEHOLD = 'LEASEHOLD', 'Leasehold'
    FREEHOLD = 'FREEHOLD', 'Freehold'


class AlphabetEnum(models.TextChoices):
    A = 'A'
    B = 'B'
    C = 'C'
    D = 'D'
    E = 'E'
    F = 'F'
    G = 'G'


class PropertyCouncilTaxBand(AlphabetEnum):
    H = 'H'
    I = 'I'


class PropertyEpcRating(AlphabetEnum):
    ...
