from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse
from django.urls import path
from users.views import AccessValidation
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from django.contrib import admin

# Register your models here.
from users.models import User
admin.site.register(User)

# Url patterns here.
urlpatterns = [
    path('api/token/validate/', AccessValidation.as_view()),
    path('api/token/',  obtain_jwt_token),
    path('api/token/refresh/', refresh_jwt_token),
]
