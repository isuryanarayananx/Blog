from django.views.decorators.csrf   import csrf_exempt
from django.http.response           import HttpResponse
from django.urls                    import path
from django.contrib                 import admin
from django.contrib.auth.admin      import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms      import UserCreationForm, UserChangeForm
from rest_framework_jwt.views       import obtain_jwt_token, refresh_jwt_token
from users.views                    import AccessValidation
from users.models                   import User

class UserAdmin(BaseUserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm

    model = User
    list_display = ('email', 'nickName','authorization')
    list_filter = ('email',)
    filter_horizontal = ()
    fieldsets = (
        (None, {'fields': ('email', 'password','nickName','authorization')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'nickName', 'authorization')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(User,UserAdmin)

# Url patterns here.
urlpatterns = [
    path('api/token/validate/', AccessValidation.as_view()),
    path('api/token/',  obtain_jwt_token),
    path('api/token/refresh/', refresh_jwt_token),
]
