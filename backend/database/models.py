from django.db import models

class Field(models.Model):
    size = models.IntegerField()
    state = models.CharField(max_length=40)
    plant = models.CharField(max_length=40)
    
class Gytrash(models.Model):
    id = models.CharField(max_length=40, primary_key=True)
    ownerId = models.CharField(max_length=40)
    name = models.CharField(max_length=40)
    icon = models.CharField(max_length=40)
    hunger = models.IntegerField()
    energy = models.IntegerField()
    health = models.IntegerField()
    complicity = models.IntegerField()
    stamina = models.IntegerField()
    speed = models.IntegerField()
    strength = models.IntegerField()

class Barn(models.Model):
    owner_id = models.IntegerField()
    lavender = models.JSONField()
    sage = models.JSONField()
    ginger = models.JSONField()
    