from rest_framework import serializers
from ..models import PropertyCoordinates


class PropertyCoordinatesSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    property_id = serializers.SerializerMethodField()

    class Meta:
        model = PropertyCoordinates
        exclude = []

    def get_property_id(self, obj: PropertyCoordinates):
        return obj.property.pk
