from rest_framework import serializers

from ..models import PropertyImage


class PropertyImageSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = PropertyImage
        exclude = []
