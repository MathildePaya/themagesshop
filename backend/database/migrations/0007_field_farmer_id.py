# Generated by Django 4.1.7 on 2023-10-08 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0006_remove_barn_owner_barn_farmer'),
    ]

    operations = [
        migrations.AddField(
            model_name='field',
            name='farmer_id',
            field=models.IntegerField(default=0),
        ),
    ]