from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class AccessValidation(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'detail': 'Authentication credentials were approved'}
        return Response(content)
