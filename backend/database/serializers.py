from rest_framework import serializers
from database.models import Field
from database.models import Gytrash
from database.models import Barn
from django.contrib.auth.models import User 
from rest_framework import serializers


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

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user