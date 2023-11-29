from rest_framework import serializers
from ..models import PropertyFloorplan


class PropertyFloorplanSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    property_id = serializers.SerializerMethodField()

    class Meta:
        model = PropertyFloorplan
        exclude = []

    def get_property_id(self, obj: PropertyFloorplan):
        return obj.property.pk
