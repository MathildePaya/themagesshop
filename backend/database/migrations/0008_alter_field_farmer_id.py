# Generated by Django 4.1.7 on 2023-10-08 07:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('database', '0007_field_farmer_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='field',
            name='farmer_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
