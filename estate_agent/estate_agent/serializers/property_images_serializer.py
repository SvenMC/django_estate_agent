from rest_framework import serializers
from ..models import PropertyImage


class PropertyImageSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    property_id = serializers.SerializerMethodField()

    class Meta:
        model = PropertyImage
        exclude = []

    def get_property_id(self, obj: PropertyImage):
        return obj.property.pk
