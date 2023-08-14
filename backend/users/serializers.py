from django.contrib.auth.models import User
from rest_framework import serializers



class UserRegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'],username =validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user
       
