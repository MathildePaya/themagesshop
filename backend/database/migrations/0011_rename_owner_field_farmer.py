# Generated by Django 4.1.7 on 2023-10-08 07:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0010_remove_field_farmer_field_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='field',
            old_name='owner',
            new_name='farmer',
        ),
    ]