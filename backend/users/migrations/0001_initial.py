# Generated by Django 3.0.5 on 2020-04-24 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='Email Address')),
                ('firstName', models.CharField(max_length=256, verbose_name='First Name')),
                ('lastName', models.CharField(max_length=256, verbose_name='Last Name')),
                ('nickName', models.CharField(max_length=256, verbose_name='Nickname')),
                ('authorization', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
        ),
    ]
