from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, BasePermission


class IsAuthorized(BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.authorization


class AccessValidation(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {
            'authenticated': request.user.is_authenticated,
            'authorized': request.user.authorization
        }
        return Response(content)
