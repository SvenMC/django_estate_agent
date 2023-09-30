from django.db import models

from utils import PropertyContractType, PropertyCouncilTaxBand, \
    PropertyEpcRating, PropertyPaymentSchedule, PropertyStatus, \
    PropertyTenure, PropertyType, lorem_ipsum_5_para


class Property(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    last_updated = models.DateTimeField(
        auto_now=True
    )
    address = models.CharField(
        max_length=150
    )
    description = models.TextField(
        null=True,
        default=lorem_ipsum_5_para
    )
    contract_type = models.CharField(
        choices=PropertyContractType.choices,
        default=PropertyContractType.BUY
    )
    title = models.CharField(
        max_length=50,
        default='123 Fake Street'
    )
    # features
    status = models.CharField(
        choices=PropertyStatus.choices,
        default=PropertyStatus.AVAILABLE
    )
    price = models.FloatField(
        default=567.89
    )
    deposit = models.FloatField(
        null=True,
        default=123.45
    )
    move_in_date = models.CharField(
        max_length=80, null=True,
        default='March 1st, 2024'
    )
    payment_schedule = models.CharField(
        choices=PropertyPaymentSchedule.choices,
        default=PropertyPaymentSchedule.MONTHLY
    )
    bedrooms = models.IntegerField(
        default=1
    )
    bathrooms = models.IntegerField(
        default=1
    )
    dimensions = models.CharField(
        max_length=80, null=True,
        default='678 sq. ft'
    )
    property_type = models.CharField(
        choices=PropertyType.choices, null=True,
        default=PropertyType.TERRACED
    )
    tenure = models.CharField(
        choices=PropertyTenure.choices,
        default=PropertyTenure.FREEHOLD
    )
    ground_rent = models.CharField(
        max_length=30, null=True,
        default='£50 a month'
    )
    annual_service_charge = models.FloatField(
        null=True,
        default=120.00
    )
    lease_duration = models.CharField(
        max_length=50, null=True,
        default='567 Years'
    )
    council_tax_band = models.CharField(
        choices=PropertyCouncilTaxBand.choices, null=True,
        default=PropertyCouncilTaxBand.A
    )
    epc_rating = models.CharField(
        choices=PropertyEpcRating.choices, null=True,
        default=PropertyEpcRating.A
    )
