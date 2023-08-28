from rest_framework import serializers

from ..models import Property


class PropertyIndexSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Property
        fields = ['url', 'created_at', 'last_updated', 'address']
