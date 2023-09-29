from django.db import models

from utils import PropertyContractType, PropertyCouncilTaxBand, \
    PropertyEpcRating, PropertyPaymentSchedule, PropertyStatus, PropertyTenure


class Property(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    address = models.CharField(max_length=150)
    description = models.TextField(null=True)
    contract_type = models.TextChoices(object=PropertyContractType)
    title = models.CharField(max_length=50)
    # features
    status = models.TextChoices(object=PropertyStatus)
    price = models.FloatField(default=567.89)
    deposit = models.FloatField(null=True)
    move_in_date = models.CharField(max_length=80, null=True)
    payment_schedule = models.TextChoices(object=PropertyPaymentSchedule)
    bedrooms = models.IntegerField(default=0)
    bathrooms = models.IntegerField(default=0)
    dimensions = models.CharField(max_length=80, null=True)
    # property_type
    tenure = models.TextChoices(object=PropertyTenure)
    ground_rent = models.CharField(max_length=30, null=True)
    annual_service_charge = models.FloatField(null=True)
    lease_duration = models.CharField(max_length=50, null=True)
    council_tax_band = models.TextChoices(
        object=PropertyCouncilTaxBand, null=True
    )
    epc_rating = models.TextChoices(
        object=PropertyEpcRating, null=True
    )
