from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import ugettext_lazy as _
from users.manager import UserManager


class User(AbstractBaseUser):

    email = models.EmailField(_('Email Address'), unique=True)
    nickName = models.CharField(_('Nickname'), blank=True, max_length=256)
    authorization = models.BooleanField(default=False)

    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
        app_label = 'users'

    def __str__(self):
        return f'user {self.email}'

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser
