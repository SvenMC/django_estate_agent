from rest_framework import serializers
from ..models import PropertyCoordinates


class PropertyCoordinatesSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    property_id = serializers.ReadOnlyField()

    class Meta:
        model = PropertyCoordinates
        exclude = []

