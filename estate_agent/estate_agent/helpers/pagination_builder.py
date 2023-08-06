from django.core.paginator import Paginator
from django.http import HttpRequest

from ..models import Property
from utils import ContractType


class PaginationBuilder:

    @staticmethod
    def build_index_paginator(
        request: HttpRequest,
        contract_type: ContractType
    ):
        properties = Property.objects\
            .filter(contract_type=contract_type)\
            .order_by('created_at')

        paginator = Paginator(properties, 10)

        page_number = request.GET.get("page")
        page_obj = paginator.get_page(page_number)

        return page_obj
