from rest_framework.pagination import PageNumberPagination

class MapIndexPagination(PageNumberPagination):
    page_size = 1000