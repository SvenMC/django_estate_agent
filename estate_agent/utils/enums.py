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


class PropertyType(models.TextChoices):
    DETACHED = 'DETACHED', 'Detached'
    SEMI_DETACHED = 'SEMI_DETACHED', 'Semi-detached'
    TERRACED = 'TERRACED', 'Terraced'
    FLAT = 'FLAT', 'Flat'
    BUNGALOW = 'BUNGALOW', 'Bungalow'
    LAND = 'LAND', 'Land'
    FARM = 'FARM', 'Farm'


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
