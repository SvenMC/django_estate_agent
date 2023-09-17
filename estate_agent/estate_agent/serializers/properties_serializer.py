from rest_framework import serializers

from ..models import Property


class PropertiesSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Property
        exclude = []
