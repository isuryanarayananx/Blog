# Generated by Django 3.0.5 on 2020-05-09 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_auto_20200509_1518'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='nickName',
            field=models.CharField(blank=True, max_length=256, verbose_name='Nickname'),
        ),
    ]
