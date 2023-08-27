from rest_framework import serializers

from ..models import Property


class PropertiesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Property
        exclude = []
