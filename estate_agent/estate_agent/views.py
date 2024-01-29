from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.request import Request
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action

from utils import PropertyContractType
from .models import Property, PropertyImage, PropertyFloorplan, \
    PropertyCoordinates
from .serializers import \
    UserSerializer, PropertiesSerializer, PropertyIndexSerializer, \
    PropertyImageSerializer, PropertyFloorplanSerializer, \
    PropertyCoordinatesSerializer
from .pagination import MapIndexPagination


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class PropertiesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Properties to be viewed or edited.
    """
    queryset = Property.objects.all().order_by('-last_updated')
    serializer_class = PropertiesSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['contract_type']

    @action(detail=True, methods=['get'])
    def images(self, request: Request, pk=None):
        queryset = PropertyImage.objects.filter(property__id=pk)

        serializer = PropertyImageSerializer(
            queryset, many=True, context={'request': request}
        )

        if serializer.data == []:
            return Response(None)

        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def floorplans(self, request: Request, pk=None):
        queryset = PropertyFloorplan.objects.filter(property__id=pk)

        serializer = PropertyFloorplanSerializer(
            queryset, many=True, context={'request': request}
        )

        if serializer.data == []:
            return Response(None)

        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def coordinates(self, request: Request, pk=None):
        # TODO Only one of these can exist for each property.
        queryset = PropertyCoordinates.objects.filter(property__id=pk).first()

        serializer = PropertyCoordinatesSerializer(
            queryset, many=False, context={'request': request}
        )

        if serializer.data['longitude'] is None \
            or serializer.data['latitude'] is None:
            return Response(None)

        return Response(serializer.data)


class RentViewSet(PropertiesViewSet):
    queryset = Property.objects.filter(
        contract_type=PropertyContractType.RENT
    ).order_by('-created_at')
    serializer_class = PropertyIndexSerializer


class BuyViewSet(PropertiesViewSet):
    queryset = Property.objects.filter(
        contract_type=PropertyContractType.BUY
    ).order_by('-created_at')
    serializer_class = PropertyIndexSerializer


class PropertyImageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Property images to be viewed or edited.
    """
    queryset = PropertyImage.objects.all().order_by('property_id')
    serializer_class = PropertyImageSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend]


class PropertyFloorplanViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Property floorplans to be viewed or edited.
    """
    queryset = PropertyFloorplan.objects.all().order_by('property_id')
    serializer_class = PropertyFloorplanSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend]


class PropertyCoordinatesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Property coordinates to be viewed or edited.
    """
    queryset = PropertyCoordinates.objects.all().order_by('property_id')
    serializer_class = PropertyCoordinatesSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend]
    pagination_class = MapIndexPagination
