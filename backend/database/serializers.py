from rest_framework import serializers
from database.models import Field
from database.models import Gytrash
from database.models import Barn

class FieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = Field
        fields = '__all__'

class GytrashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gytrash
        fields = '__all__'

class BarnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Barn
        fields = '__all__'